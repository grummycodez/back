const Discord = require('discord.js')
const db = require('quick.db')
module.exports = async (client, message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
    const settings = message.guild
    ? client.settings.get(message.guild.id)
    : client.config.defaultSettings;
  if(message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (message.system) return;
    if (message.mentions.users.first() === client.user) {
    message.reply('my prefix is: `' + settings.prefix + '`. Do ' + settings.prefix + 'help for some info!');
}
  message.settings = settings;
  

  if (message.content.indexOf(settings.prefix) !== 0) return;
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const level = client.permlevel(message);
  
  
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  // using this const varName = thing OR otherthign; is a pretty efficient
  // and clean way to grab one of 2 values!
  if (!cmd) return;

  // Some commands may not be useable in DMs. This check prevents those commands from running
  // and return a friendly error message.
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("Woah! Hold up... this command isn't available in DMs. If you think this is an error, report it in the support server (https://discord.gg/W5gRm4u).");
  
  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
  //     return message.channel.send(`You do not have permission to use this command.
  // Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
  // This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
      var embed = new Discord.MessageEmbed()
      .setTitle(":x: You do not have permission to use that command.")
      .addField("Your permission level is:", ` ${level} - ${client.config.permLevels.find(l => l.level === level).name}`)
      .addField("Permission level needed:", `${client.levelCache[cmd.conf.permLevel]} - ${cmd.conf.permLevel}`)
      .setColor("RANDOM")
                message.channel.send(embed)
      client.logger.cmd(`[PERMISSION LEVEL] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) tried to run: ${cmd.help.name}`);
      return;
    } else {
      return;
    }
  }
  // To simplify message arguments, the author's level is now put on level (not member so it is supported in DMs)
  // The "level" command module argument will be deprecated in the future.
  message.author.permLevel = level
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  // If the command exists, **AND** the user has permission, run it.
  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  cmd.run(client, message, args, level);  

};