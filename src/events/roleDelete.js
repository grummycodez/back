const Discord = require('discord.js')
module.exports = (client, channel) => {
  const settings = client.settings.get(channel.guild.id);
  if(settings.modLogsEnabled === 'true'){
    var modchannel = channel.guild.channels.find(channel => channel.name === settings.modlogchannel)
        var embed = new Discord.MessageEmbed()
  .setAuthor("Role Removed")
  .setDescription(`**Role**: ${channel.id}\n**Action**: Role Removed\n**Role**: ${channel}`)
  .setTimestamp()
    .setFooter("ID:" + channel.id)
  
  modchannel.send(embed)
  }
};