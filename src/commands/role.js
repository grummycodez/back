
const Discord = require('discord.js');
exports.run = async (client, message, args, level) => { 
const Moderator = message.author;
  const action = args[0]
  const key = args.slice(2).join(" ")   
  const user = message.mentions.members.first()
  const settings = client.settings.get(message.guild.id);
  if(settings.moderation === 'true'){
  }
  if(action === 'add'){
    if(!user){
      
    } 
    if(!key){
    }
    
    if(user && key){
      const role = message.guild.roles.find(role => role.name === key)
      user.roles.add(role)
    }
  } else {
    message.channel.send("coming soon ;)")
    var embed = new Discord.MessageEmbed()
    .setTitle
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "role",
  description: "Add/Remove a role from a user.",
  usage: "role",
  category: "Moderation"
};