
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Moderator = message.author;
    const settings = client.settings.get(message.guild.id);
  if (settings.moderation !== 'true') {
    MessageEmbed(Moderator, 0XFF5151, `Moderation is disabled on this server.`)

    return;
  }
    if(!args[0]) {
      MessageEmbed(Moderator, 0XFF5151, `:x: Please give me a number of messages to purge!`)
      return;
    }
  if(args[0] >= 100){
    MessageEmbed(Moderator, 0XFF5151, `:x: Please give me a number of messages to purge in between 1 and 99.`)
    return;
  }
    message.delete()
    message.channel.bulkDelete(args[0]).then(() => {
    MessageEmbed(Moderator, 0XFF5151, `:white_check_mark:  Purged ${args[0]} messages for you!`)
    let modlog = message.guild.channels.find(channel => channel.name === settings.modlogchannel);
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`**Channel**: ${message.channel.name} (${message.channel.id}) \n**Action**: Purge \n**Messages Deleted**: ${args[0]}`)
    .setFooter('ID:' + message.id)
    .setTimestamp()
    modlog.send(embed)
      return;
    });
  function MessageEmbed(Mod1, Color, Description) {
  var embed = new Discord.MessageEmbed()
  .setAuthor(Mod1.username, Mod1.displayAvatarURL())
  .setColor(Color)
  .setDescription(Description);
  message.channel.send({ embed });
};

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["purges","clear","prune"],
  permLevel: "Moderator"
}

exports.help = {
  name: 'purge',
  description: 'Purges the amount of messages specified',
  usage: 'purge [number of messages]',
  category: "Moderation"
};