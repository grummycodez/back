let rps = ["**:moyai: rock**", "**:pencil: paper**", "**:scissors: scissors**"];
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` }
exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Please specify either rock, paper or scissors.");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return msg.channel.send(`Please specify either rock, paper or scissors.`);
    msg.reply(random());
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'rps',
  category: 'Fun Commands',
  description: 'Rock, Papper, Scissors.',
  usage: 'rps'
};
