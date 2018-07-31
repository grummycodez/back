module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.settings.get(member.guild.id);
  if(settings.welcomeEnabled === 'true'){
    var welcome = member.guild.channels.find(channel => channel.name === settings.welcomeChannel)
    if(settings.welcomeMessage === 'none'){
    var message = 'Welcome to ' + member.guild.name + ", <@" + member.user.id + ">! :tada:"
    welcome.send(message)
      return;
    } else {
      var message = settings.welcomeMessage
      message.channel.send(message)
      return;
          }
    
  }
  if(settings.autoRole === 'true'){
    var role = member.guild.roles.find(role => role.name === settings.autoRoleRole)
    if(!role) return;
    member.roles.add(role, "Yeeter AutoRole")
  }
}