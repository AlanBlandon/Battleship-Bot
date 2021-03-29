module.exports = {
    name: 'maketextchannel',
    description: "This is a create text channel command",
    execute(message, args, Discord){
        var channelArray = ['room-1', 'room-2']
        message.guild.channels.create('BATTLESHIP!', { type: 'category' });
        /*
        message.guild.channels.create('room-1')
        .then(console.log)
        .catch(console.error);
        message.guild.channels.create('room-2')
        .then(console.log)
        .catch(console.error);
        */
        const redTeam = message.guild.roles.cache.find(role => role.name === "Red Team");
        const blueTeam = message.guild.roles.cache.find(role => role.name === "Blue Team");
    message.guild.channels.create(channelArray[0])
  .then(channel => {
    let category = message.guild.channels.cache.find(c => c.name == "BATTLESHIP!" && c.type == "category");
    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
    channel.overwritePermissions([
      {
      id: redTeam.id,
      deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
    ]);
    message.channel.overwritePermissions([
      {
         id: redTeam.id,
         deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
    ]);
  }).catch(console.error);

  message.guild.channels.create(channelArray[1])
  .then(channel => {
    let category = message.guild.channels.cache.find(c => c.name == "BATTLESHIP!" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
    channel.overwritePermissions([
      {
         id: blueTeam.id,
         deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
    ]);
    message.channel.overwritePermissions([
      {
         id: blueTeam.id,
         deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
      },
    ]);
  }).catch(console.error);

    }
}