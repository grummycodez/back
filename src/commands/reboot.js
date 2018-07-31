const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  
  client.user.setPresence({activity: {type: 'WATCHING', name: "starting..."}});
  
  var embed = new Discord.MessageEmbed()
  .setAuthor('Yeeter', client.user.displayAvatarURL())
  .setThumbnail(client.user.displayAvatarURL())
  .setColor(0X2355CF)
  .setDescription('Bot is Restarting...');
  await message.channel.send({ embed })
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["restart"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "reboot",
  description: "Shuts down the bot, then starts again.",
  usage: "reboot",
  category: "Bot Developers"
};