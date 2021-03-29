const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '!';

const fs = require('fs');

require("dotenv").config();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Prometheus is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'setup'){
        client.commands.get('setup').execute(message, args, Discord);
    }
    else if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord, client);
    }
    else if(command === 'maketextchannel'){
        client.commands.get('maketextchannel').execute(message, args, Discord);
    }
    /*else if(message.content === '!shoot-terrorist'){
        try {
			message.react('❌');
		    message.react('👳‍♂️');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
    }*/
});

//Keep this statement at the end of the file
client.login(process.env.TOKEN);