module.exports = {
    name: 'ban',
    async execute(message, args) {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Mention a user to ban.');
  
      try {
        await member.ban();
        message.channel.send(`🔨 Banned ${member.user.tag}`);
      } catch {
        message.reply('Failed to ban the user.');
      }
    }
  };
  