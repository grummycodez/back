module.exports = (client, guild) => {
  client.settings.set(guild.id, client.config.defaultSettings);
  client.logger.log(`[GUILD CREATE] ${guild.name} has been added to settings & servers`, "guild")
};