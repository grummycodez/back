const Discord = require('discord.js')
module.exports = (client, channel) => {
  const settings = client.settings.get(channel.guild.id);
  if(settings.modLogsEnabled === 'true'){
    var modchannel = channel.guild.channels.find(channel => channel.name === settings.modlogchannel)
        var embed = new Discord.MessageEmbed()
  .setAuthor("Channel Removed")
  .setDescription(`**Channel**: ${channel.id}\n**Action**: Channel Removed\n**Channel**: ${channel}`)
  .setTimestamp()
    .setFooter("ID:" + channel.id)
  
  modchannel.send(embed)
  }
};