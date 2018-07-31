const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
        let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
let boticon = bot.user.displayAvatarURL();
        let botinfo = new Discord.MessageEmbed()
        .setAuthor("Bot Stats", boticon)
         .setDescription(`**Bot Name**: ${bot.user.username}\n**Servers**: ${bot.guilds.size}\n**Users**: ${bot.users.size}\n**Uptime**: ${uptime}\n**Shard**: 2/3`)
        message.channel.send(botinfo)
        return;
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats"],
  permLevel: "User"
}

exports.help = {
  name: 'botinfo',
  description: 'Displays information about the bot',
  usage: 'botinfo [user]',
  category: "Misc"
};