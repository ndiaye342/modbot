module.exports = {
    name: 'kick',
    async execute(message, args) {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Mention a user to kick.');
  
      try {
        await member.kick();
        message.channel.send(`👢 Kicked ${member.user.tag}`);
      } catch {
        message.reply('Failed to kick the user.');
      }
    }
  };
  