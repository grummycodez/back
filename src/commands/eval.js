const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  const evalEmbed = new Discord.MessageEmbed();
  const code = args.join(' ');
  String.prototype.replaceAll = function (search, replacement) {
    return this.replace(RegExp(search, 'gi'), replacement);
  
};
  client.clean = text => {
    if (typeof text !== 'string') {
        text = require('util')
            .inspect(text, { depth: 0 });
    }
    text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replace(client.token, "010011100110111100100000-NO-0101000110111-CODE-0101101100-4-0101101110001000000100011-U-01101111110010001000000-HEHE-00101101101001");
    return text;
};
  try {
      const evaled = client.clean(eval(code));
      evalEmbed.addField('**Input:**', `\`\`\`\n${code}\n\`\`\``);
      evalEmbed.setColor('0x42f468');
      if (evaled.length < 800) {
          evalEmbed.addField('***Output:***', `\`\`\`xl\n${evaled}\n\`\`\``);
      } else {
          evalEmbed.addField('****Output:***', `Over 800 chars long!`)
      }
      message.channel.send(evalEmbed);
  } catch (err) {
      evalEmbed.setColor('0xff0000');
      evalEmbed.addField('ERROR', `\`\`\`xl\n${err}\n\`\`\``);
      message.channel.send(evalEmbed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "eval",
  description: "Evaluates Code.",
  usage: "eval <code>",
  category: "Bot Developers"
};