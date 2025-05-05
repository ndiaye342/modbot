module.exports = {
    name: 'clear',
    async execute(message, args) {
      const count = parseInt(args[0], 10);
      if (isNaN(count) || count <= 0 || count > 100) {
        return message.reply('Provide a number between 1 and 100.');
      }
  
      try {
        await message.channel.bulkDelete(count + 1, true);
        const msg = await message.channel.send(`🧹 Deleted ${count} messages.`);
        setTimeout(() => msg.delete(), 3000);
      } catch {
        message.reply('Failed to delete messages.');
      }
    }
  };
  