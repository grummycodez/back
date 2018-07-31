const Discord = require("discord.js");
const shorten = require("isgd");
exports.run = (client, message, args) => {
    let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
 var guild = message.guild;
  shorten.shorten(guild.iconURL(), function(res) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("Server Info", guild.iconURL())
    .setDescription(`**Server Name**: ${guild.name}\n**Server Verification Level**: ${guild.verificationLevel}\n**Explicit Content Filter**: ${guild.explicitContentFilter}\n**Owner**: ${guild.owner}\n**Members**: ${guild.memberCount}\n**Bots**: ${guild.members.filter(m => m.user.bot).size}\n**Users**: ${guild.members.filter(m => !m.user.bot).size}\n**Icon URL**: __${res}__\n**Region**: ${guild.region}\n**Verified**: ${guild.verified}\n**Channels**: ${guild.channels.size}\n**Afk Channel**: <#${guild.afkChannel.id}>\n**Afk Timeout**: ${guild.afkTimeout}\n**Emojis**: ${guild.emojis.map(e => e.toString()).join(" ")}\n**Roles**: ${guild.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ")}`)
    .setFooter(`ID: ${guild.id} | Server Created • ${day}/${month}/${year}`)
    .setThumbnail(res)

  message.channel.send({
    embed
  });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["serverinformation", "sinfo"],
  permLevel: "User"
};

exports.help = {
  name: "serverinfo",
  description: "Gets the servers information",
  usage: "serverinfo",
  category: "Misc"
};
