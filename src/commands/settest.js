  const { inspect } = require("util");
const Discord = require('discord.js');
exports.run = async (client, message, [action, key, ...value], level) => { // eslint-disable-line no-unused-vars
const Moderator = message.author;
  const settings = client.settings.get(message.guild.id);
  if (action === "add") {
    if (!key) return MessageEmbed(Moderator, 0XFF5151, 'Please specify a key to add.');
    if (settings[key]) return MessageEmbed(Moderator, 0XFF5151, 'Specified key already exists in the configuration.');
    if (value.length < 1) return MessageEmbed(Moderator, 0XFF5151, 'Please specify a new value.');

    settings[key] = value.join(" ");
  
    client.settings.set(message.guild.id, settings);
    message.reply(`${key} successfully added with the value of ${value.join(" ")}`);
  } else
  if (action === "edit") {
    if (!key) return MessageEmbed(Moderator, 0XFF5151, 'Please specify a key to edit.');
    if (!settings[key]) return MessageEmbed(Moderator, 0XFF5151, 'Specified key does not exist in the configuration.');
    if (value.length < 1) return MessageEmbed(Moderator, 0XFF5151, 'Please specify a new value.');
  
    settings[key] = value.join(" ");

    client.settings.set(message.guild.id, settings);
    MessageEmbed(Moderator, 0X42F47A, key + ' successfully edited to ' + value.join(' '));
  } else
  

  
  if (action === "get") {
    if (!key) return MessageEmbed(Moderator, 0XFF5151, 'Please specify a key to view.');
    if (!settings[key]) return MessageEmbed(Moderator, 0XFF5151, 'Specified key does not exist in the configuration.');
    MessageEmbed(Moderator, 0X42F47A, 'The value of `' + key + '` is currently set to ' + settings[key] + '.');
  } else {
    var embed = new Discord.MessageEmbed()
    .setAuthor("Settings:", client.user.displayAvatarURL())
    .setDescription(inspect(settings))
    .setColor("RANDOM")
    message.channel.send(embed)
    
  }
  
function MessageEmbed(Mod1, Color, Description) {
  var embed = new Discord.MessageEmbed()
  .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
  .setColor(Color)
  .setDescription(Description);
  message.channel.send({ embed });
};
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "settest",
  description: "View or change settings for your server.",
  usage: "settings <view/get/edit> <key> <value>",
  category: "Bot Owner"
};