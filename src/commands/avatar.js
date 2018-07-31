const Discord = require("discord.js")
  exports.run = (client, msg, args) => {
    let avatar = msg.mentions.users.size ? msg.mentions.users.first().displayAvatarURL() : msg.author.displayAvatarURL();
  let user = msg.mentions.users.first() || msg.author.displayAvatarURL()
    if (msg.mentions.users.size > 0) {
                        const embed = new Discord.MessageEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setTitle(user.username + "'s avatar:") // This will set the embed title
        .setImage(avatar) // This will set the embed image
msg.channel.send(embed)
    } else {
                  const embed = new Discord.MessageEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setTitle(msg.author.username + "'s avatar:") // This will set the embed title
        .setImage(avatar) // This will set the embed image
        
    // Send Message
    msg.channel.send(embed)
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'avatar',
  category: 'Fun Commands',
  description: 'Shows the avatar of the mentioned user.',
  usage: 'avatar [mention]'
};
