module.exports = {
    name: 'play',
    description: "Play to play!",
    async execute(message, args, Discord, client){
        let server = message.guild.id, 
        channel = message.channel.id  
        //const channel = '824055307491082251';
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue Team");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red Team");

        const blueTeamEmoji = '🔵';
        const redTeamEmoji = '🔴';

        let embed = new Discord.MessageEmbed()
        .setColor('#000599')
        .setTitle('Pick a Side!')
        .setDescription('What team are you on?\n\n'
        + `${blueTeamEmoji} for blue team.\n`
        + `${redTeamEmoji} for red team.`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(redTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === blueTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if(reaction.emoji.name === redTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
            }
            else{
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === blueTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if(reaction.emoji.name === redTeamEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
            }
            else{
                return;
            }
        });
    }
}