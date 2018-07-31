  const { 
    inspect 
  } = require("util");
const Discord = require('discord.js');
exports.run = async (client, message, [action, key, value, ...end], args, level) => { 
const Moderator = message.author;
  const settings = client.settings.get(message.guild.id);
  
  if (action === "prefix") {

    if(key === 'reset'){

          client.settings.set(message.guild.id, settings);
                                    var test = new Discord.MessageEmbed()
    .setTitle("❗ Prefix Settings")
    .addField(`**✅ Prefix Reset to:**`, `${settings.prefix}`)
                                    .setColor(0xFF0000)
    message.channel.send(test)
        return;
      return;
    } else {
      if(key){
      settings["prefix"] = key
            client.settings.set(message.guild.id, settings);
                              var test = new Discord.MessageEmbed()
    .setTitle("❗ Prefix Settings")
    .addField(`**✅ New Prefix:**`, `${settings.prefix}`)
                              .setColor(0xFF0000)
    message.channel.send(test)
        return;
    }
                      var test = new Discord.MessageEmbed()
    .setTitle("❗ Prefix Settings")
    .setDescription(`Prefix Settings for yeeter.`)
    .addField(`**✅ Current Prefix:**`, '`' + settings.prefix + '`')
    .addField('**✏ Change Prefix:**', '`' + settings.prefix + 'settings prefix [new prefix]`')
    .addField(`**🔄 Reset Prefix:**`, '`' + settings.prefix + 'settings prefix reset`')
                      .setColor(0xFF0000)
    message.channel.send(test)
      
    } 

    
  } else
  if (action === "moderation") {
    var modlogchannelsl = message.guild.channels.find(channel => channel.name === settings.modlogchannel)


    
    if(key === 'enabled'){
      if(value){
        settings["moderation"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🔨 Moderation Settings")
        .addField(`**✅ New Value:**`, `${settings.moderation}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
        if(key === 'channel'){
      if(value){
        settings["modlogchannel"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🔨 Moderation Settings")
        .addField(`**✅ New Value:**`, `${settings.modlogchannel}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
    
        if(key === 'logs'){
        
      if(value){
        settings["modLogsEnabled"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🔨 Moderation Settings")
        .addField(`**✅ New Value:**`, `${settings.modLogsEnabled}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
    if(modlogchannelsl){
        var test = new Discord.MessageEmbed()
    .setTitle("🔨 Moderation Settings")
    .setDescription(`Moderation Settings for yeeter.`)
    .addField(`**🛠 Enabled:**`, settings.moderation + ', `' + settings.prefix + 'settings moderation enabled [true/false]`')
    .addField('**📝 Logs:**', settings.modLogsEnabled + ', `' + settings.prefix + 'settings moderation logs [true/false]`')
    .addField(`**📰 Log Channel:**`, '<#' + modlogchannelsl.id + '>, `' + settings.prefix + 'settings moderation channel [channel name]`')
        .setColor(0xFF0000)
    message.channel.send("not finished") + message.channel.send(test)
      return;
    } else {
              var test = new Discord.MessageEmbed()
    .setTitle("🔨 Moderation Settings")
    .setDescription(`Moderation Settings for yeeter.`)
    .addField(`**🛠 Enabled:**`, settings.moderation + ', `' + settings.prefix + 'settings moderation enabled [true/false]`')
    .addField('**📝 Logs:**', settings.modLogsEnabled + ', `' + settings.prefix + 'settings moderation logs [true/false]`')
    .addField(`**📰 Log Channel:**`, 'none, `' + settings.prefix + 'settings moderation channel [channel name`]')
              .setColor(0xFF0000)
    message.channel.send("not finished") + message.channel.send(test)
    }
    
  } else
  
    if (action === 'greetings') {
          var modlogchannelsl = message.guild.channels.find(channel => channel.name === settings.welcomeChannel)


    
    if(key === 'enabled'){
      if(value){
        settings["welcomeEnabled"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🤗 Greeting Settings")
        .addField(`**✅ New Value:**`, `${settings.welcomeEnabled}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
        if(key === 'message'){
      if(value){
        settings["welcomeMessage"] = value.join(" ")
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🤗 Greeting Settings")
        .addField(`**✅ New Value:**`, `${settings.welcomeMessage}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
    
        if(key === 'channel'){
        
      if(value){
        settings["welcomeChannel"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🤗 Greeting Settings")
        .addField(`**✅ New Value:**`, `${settings.welcomeChannel}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
    if(modlogchannelsl){
        var test = new Discord.MessageEmbed()
    .setTitle("🤗 Greeting Settings")
    .setDescription(`Greeting Settings for yeeter.`)
    .addField(`**👐 Enabled:**`, settings.welcomeEnabled + ', `' + settings.prefix + 'settings greetings enabled [true/false]`')
    .addField('**📝 Message:**', settings.welcomeMessage + ', `' + settings.prefix + 'settings greeetings message [default/message]`')
    .addField(`**📰 Channel:**`, '<#' + modlogchannelsl.id + '>, `' + settings.prefix + 'settings greetings channel [channel name]`')
        .setColor(0xFF0000)
    message.channel.send("not finished") + message.channel.send(test)
      return;
    } else {
        var test = new Discord.MessageEmbed()
    .setTitle("🤗 Greeting Settings")
    .setDescription(`Greeting Settings for yeeter.`)
    .addField(`**👐 Enabled:**`, settings.welcomeEnabled + ', `' + settings.prefix + 'settings greetings enabled [true/false]`')
    .addField('**📝 Message:**', settings.welcomeMessage + ', `' + settings.prefix + 'settings greetings message [default/message]`')
    .addField(`**📰 Channel:**`, 'none, `' + settings.prefix + 'settings greetings channel [channel name]`')
        .setColor(0xFF0000)
    message.channel.send("not finished") + message.channel.send(test)
      return;
    }
    
    } else 
          if (action === 'autorole') {
          var modlogchannelsl = message.guild.channels.find(channel => channel.name === settings.welcomeChannel)


    
    if(key === 'enabled'){
      if(value){
        settings["autoRole"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🤖 Auto Role Settings")
        .addField(`**✅ New Value:**`, `${settings.autoRole}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
        if(key === 'role'){
      if(value){
        settings["autoRoleRole"] = value
            client.settings.set(message.guild.id, settings);
         var test = new Discord.MessageEmbed()
        .setTitle("🤖 Auto Role Settings")
        .addField(`**✅ New Value:**`, `${settings.autoRoleRole}`)
         .setColor(0xFF0000)
        message.channel.send(test)
        return;
      }
    }
  if(!settings.autoRoleRole){
            var test = new Discord.MessageEmbed()
    .setTitle("🤖 Auto Role Settings")
    .setDescription(`Auto Role Settings for yeeter.`)
    .addField(`**💻 Enabled:**`, settings.autoRole + ', `' + settings.prefix + 'settings autorole enabled [true/false]`')
    .addField('**📋 Role:**', 'none' + ', `' + settings.prefix + 'settings autorole role [role name]`')
        .setColor(0xFF0000)
    message.channel.send("not finished") + message.channel.send(test)
      return;
  }
        var test = new Discord.MessageEmbed()
    .setTitle("🤖 Auto Role Settings")
    .setDescription(`Auto Role Settings for yeeter.`)
    .addField(`**💻 Enabled:**`, settings.autoRole + ', `' + settings.prefix + 'settings autorole enabled [true/false]`')
    .addField('**📋 Role:**', settings.autoRoleRole + ', `' + settings.prefix + 'settings autorole role [role name]`')
        .setColor(0xFF0000)
    message.channel.send("not finished") + message.channel.send(test)
      return;

  
    
    } else 


  
  if (action === "get") {
  } else {
        var test = new Discord.MessageEmbed()
    .setAuthor("Server Settings")
    .setDescription('Use: `' + `${settings.prefix}` + 'settings [setting]` to view settings for the option you want to change the value for.')
    .addField(`**❗ Prefix:**`, '`' + `${settings.prefix}` + 'settings prefix`', true)
    .addField(`🔨 Moderation`, '`' + `${settings.prefix}` + 'settings moderation`', true)
    .addField(`🤗 Greetings`, '`' + `${settings.prefix}` + 'settings greetings`', true)
    .addField(`🤖 Auto Role`, '`' + `${settings.prefix}` + 'settings autorole`', true)
    .addField(`🎧 Music`, '`' + 'stay tuned 🎶`', true)
    .addField(`⌨ Afk`, '`coming soon ;)`', true)
    .setColor(0xFF0000)
    message.channel.send(test)
    
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
  aliases: ["set", "serverset", "setting", "conf", "config"],
  permLevel: "Server Admin"
};

exports.help = {
  name: "settings",
  description: "View or change settings for your server.",
  usage: "settings",
  category: "Server Admin"
};