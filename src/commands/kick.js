const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const settings = client.settings.get(message.guild.id);
  if (settings.moderation !== 'true') {
    message.channel.send("Moderation is disabled on this server")
    return;
  }
   var naughtyperson = message.mentions.members.first()
    if(!naughtyperson){
      var embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setDescription("Please specify a user to be kicked.")
      message.channel.send(embed)
        //message.reply("Tag someone to be banned.")
        return;
    }
    if(naughtyperson.hasPermission('MANAGE_MESSAGES')){
            var embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setDescription("They can't be kicked.")
      message.channel.send(embed)
        // message.channel.send('They cannot be banned.')
        return;
    }
    var reasonforban = args.slice(1).join(" ")
    if(!reasonforban){
                var embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Please specify a reason for ${naughtyperson} to be kicked.`)
        message.channel.send(embed)
        return;
    }
    await naughtyperson.kick(message.author.tag + reasonforban)
        .catch(error => message.reply(`Oh no! I can't kick him! My privellege must be too low. Try moving my role up! If that doesn't fix it, be sure to join the support server: https://discord.gg/WfPwbsS`));
  
  var embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`User has been kicked.`)
            message.channel.send(embed)
  let modlog = message.guild.channels.find(channel => channel.name === settings.modlogchannel);
    var embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setDescription(`**Member**: ${naughtyperson} (${naughtyperson.id})\n**Action**: Kick\n**Reason**: ${reasonforban}`)
    .setFooter('ID:' + message.id)
  .setTimestamp()
  
  modlog.send(embed)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: 'kick',
  category: 'Moderation',
  description: 'kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
