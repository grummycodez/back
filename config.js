const config = {
 "ownerID": ['160836854453633024'], // O
  "developers": ['399982462245011456','427040024513609729'],
  "support" : ['200264328794996737'],
  "admins" : ['399982462245011456'],  
  "friends": ["342817930909712384","296282934921527297"],
  "ServerAdmins" : [], 
  

  "token": process.env.BOT_TOKEN,


  "defaultSettings" : {
    "prefix": ">",
    "systemNotice": "true", // This gives a notice when a user tries to run a command that they do not have permission to use.
    "welcomeEnabled": "false",
    "welcomeChannel": "welcome",
    "welcomeMessage": "none",
    "moderation": "true",
    "modlogchannel": "mod-logs",
    "modLogsEnabled": "false",
    "autoRoleEnabled": "false",
    "autoRoleRole": "",
  },
   
  // PERMISSION LEVEL DEFINITIONS.

  permLevels: [
    // This is the lowest permisison level, this is for non-roled users.
    { level: 1,
      name: "User", 
      // Don't bother checking, just return true which allows them to execute any command their
      // level allows them to.
      check: () => true
    },
    { level: 81,
     name: "Friend",
     check: (message) => config.friends.includes(message.author.id)
    },
    // This is your permission level, the staff levels should always be above the rest of the roles.

        { level: 89,
      // This is the name of the role.
      name: "Moderator",
      // The following lines check the guild the message came from for the roles.
      // Then it checks if the member that authored the message has the role.
      // If they do return true, which will allow them to execute the command in question.
      // If they don't then return false, which will prevent them from executing the command.
      check: (message) => {
          check: (message) => message.member.hasPermission("MANAGE_MESSAGES")
      }
    },

    { level: 90,
      name: "Administrator", 
      check: (message) => message.member.hasPermission("BAN_MEMBERS")
    },
    // This is the server owner.
    { level: 91,
      name: "Server Owner", 
      // Simple check, if the guild owner id matches the message author's ID, then it will return true.
      // Otherwise it will return false.
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },
    
    { level: 94,
     name: "Bot Support",
     check: (message) => config.support.includes(message.author.id)
    },
    // Bot Admin has some limited access like rebooting the bot or reloading commands.
    { level: 96,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 99,
     name: "Bot Developer",
     check: (message) => config.developers.includes(message.author.id)
    },

    // This is the bot owner, this should be the highest permission level available.
    // The reason this should be the highest level is because of dangerous commands such as eval
    // or exec (if the owner has that).
    { level: 100,
      name: "Bot Owner", 
      // Another simple check, compares the message author id to the one stored in the config file.
      check: (message) => message.client.config.ownerID.includes(message.author.id)
    }
  ]
}

module.exports = config