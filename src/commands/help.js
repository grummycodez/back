const Discord = require("discord.js")
exports.run = (client, message, params) => {
          const settings = client.settings.get(message.guild.id);
        let prefix = settings.prefix
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        let help = new Discord.MessageEmbed()
    .setAuthor("Commands:", client.user.avatarURL)
    .setColor(0x0000FF)
    .setDescription("Server Prefix: `" + settings.prefix + '`')
    .addField(":information_source:  Information \n", `${client.commands.filter(cmd => cmd.help.category === 'Misc').map(cmd => `\`${prefix}${cmd.help.name}\` - ${cmd.help.description}`).join("\n ")}`, true)
    .addField("🔨 Moderation\n", `${client.commands.filter(cmd => cmd.help.category === 'Moderation').map(cmd => `\`${prefix}${cmd.help.name}\` - ${cmd.help.description}`).join("\n ")}`, true)
    // .addField("<:roblox:466724821447868436>  Roblox\n", `${client.commands.filter(cmd => cmd.help.category === 'roblox').map(cmd => `\`.${cmd.help.name}\` - ${cmd.help.description}`).join("\n ")}`, true)
    .addField(":panda_face:   Fun Commands\n", `${client.commands.filter(cmd => cmd.help.category === 'Fun Commands').map(cmd => `\`${prefix}${cmd.help.name}\` - ${cmd.help.description}`).join("\n ")}`, true)
    .addField(":newspaper:    Server Admin\n", `${client.commands.filter(cmd => cmd.help.category === 'Server Admin').map(cmd => `\`${prefix}${cmd.help.name}\` - ${cmd.help.description}`).join("\n ")}`, true)
        .addField("Invite the bot! :tada: (server-locked)", "https://discordapp.com/api/oauth2/authorize?client_id=468524277260615690&permissions=8&scope=bot")
    .setTimestamp()
        var author = new Discord.MessageEmbed()
        .setTitle("Check your direct messages! 📮")
        .setColor("RANDOM") //too lazy ok
message.channel.send(help) 
  //message.channel.send(author)
  } else {
    let command = params[0];

    if (client.commands.has(command)) {
      
      command = client.commands.get(command);
      var aliases = command.conf.aliases
      if(!aliases){
              var embed = new Discord.MessageEmbed()
      .setColor(0x703817)
      .setTitle(command.help.category + " - " + command.help.name)
      .setDescription("\n" + "Usage: `" + prefix + command.help.usage + "`\n\n" + "Description: `" + command.help.description + "`")
      message.channel.send(embed)
      }
      var embed = new Discord.MessageEmbed()
      .setColor(0x703817)
      .setTitle(command.help.category + " - " + command.help.name)
      .setDescription("\n" + "Usage: `" + prefix + command.help.usage + "`\n\n" + "Description: `" + command.help.description + "`" + "\n\n" + "Aliases: `" + command.conf.aliases + "`")
      message.channel.send(embed)
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp']
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
  category: "Misc"
};