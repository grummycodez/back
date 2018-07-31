module.exports = (client, guild) => {
  client.settings.delete(guild.id);
    client.logger.log(`[GUILD DELETE] ${guild.name} has been removed from settings & servers`, "guild")
};