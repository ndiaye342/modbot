module.exports = {
    name: 'mute',
    async execute(message, args, config) {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Mention a user to mute.');
  
      let muteRole = message.guild.roles.cache.find(role => role.name === config.muteRoleName);
      if (!muteRole) {
        try {
          muteRole = await message.guild.roles.create({
            name: config.muteRoleName,
            permissions: []
          });
  
          message.guild.channels.cache.forEach(channel => {
            channel.permissionOverwrites.create(muteRole, {
              SendMessages: false,
              Speak: false
            });
          });
        } catch (err) {
          return message.reply('Failed to create mute role.');
        }
      }
  
      await member.roles.add(muteRole);
      message.channel.send(`🔇 Muted ${member.user.tag}`);
    }
  };
  