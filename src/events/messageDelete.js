const Discord = require("discord.js")
module.exports = (client, message) => {
  const settings = message.guild
    ? client.settings.get(message.guild.id)
    : client.config.defaultSettings;
  

  
};