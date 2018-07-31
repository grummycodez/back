const Discord = require("discord.js")
exports.run = async (client, message, User, level) => {// eslint-disable-line no-unused-vars
  

    const friendly = client.config.permLevels.find(l => l.level === level).name;
    var embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor("Yeeter", client.user.displayAvatarURL())
    .setDescription("Your permission level is: " + level + " - " + friendly)
    .setColor("RANDOM")
    message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["permissionlevel","permlvl"],
  permLevel: "User"
};

exports.help = {
  name: "permlevel",
  description: "Tells you your permission level.",
  usage: "permlevel",
  category: "Misc"
};