
const Discord = require('discord.js');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);
const client = new Discord.Client();
client.on("ready", () => {
  client.user.setPresence({activity: {type: 'WATCHING', name: "yeet | >help"}});
  // client.user.setAvatar('https://cdn.glitch.com/9d90064c-0be8-40fd-8c17-59ab1aca28f6%2F-t4MYe7r_400x400.jpg?1532414200539')
})
require('./express');

client.logger = require('./src/util/logger');
client.config = require('./config');
require("./src/modules/functions.js")(client);
client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({provider: new EnmapLevel({name: "settings1"})});



const init = async() => {
  //warnStore.sync();
  
  const cmdFiles = await readdir("./src/commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./src/events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./src/events/${file}`);
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./src/events/${file}`)];
  });

  // Generate a cache of client permissions for pretty perms
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
  
  client.login(process.env.BOT_TOKEN, {fetchAllMembers: true});
};
init();