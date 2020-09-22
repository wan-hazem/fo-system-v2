const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
const cmd = require("node-cmd");
const {  prefix, devs ,ticketrole ,nCategory} = require("./config");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :-')
  console.log('')
  console.log(`servers! [ " ${client.guilds.cache.size} " ]`);
  console.log(`Users! [ " ${client.users.cache.size} " ]`);
  console.log(`channels! [ " ${client.channels.cache.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
  client.user.setActivity(`${prefix}help | ${prefix}inv | v2.1.1`);
});

//=============================== - [ message ] - ======================================
client.on('message', msg => {
    if (msg.content === 'كفو') {
        msg.reply('**كفوك الطيب يا الغالي النفيس**');
    }
});
client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.channel.send('hello');
  }
});
client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.channel.send('hello');
  }
});
client.on('message', msg => {
    if (msg.content === 'هاي') {
        msg.reply('**وعليكم الهاي**');
    }
});
client.on('message', msg => {
    if (msg.content === 'باي') {
        msg.reply('**الله معاك يا قلبي**');
    }
});

client.on('message', msg => {
    if (msg.content === 'سلام عليكم') {
        msg.reply('**و عليكم السلام**');
    }
});

client.on('message', msg => {
    if (msg.content === 'باك') {
        msg.reply('** :wink: وِلِـكُمِـ ﻧَوِرُتْ   :sparkling_heart:**');
    }
});

client.on('message', msg => {
    if (msg.content === 'مرحبا') {
        msg.reply('**❤هلا بيك منور حمبي**');
    }
});

client.on('message', msg => {
    if (msg.content === 'احبك') {
        msg.reply('** و انا كمان**');
    }
});

client.on('message', msg => {
    if (msg.content === 'هلا') { 
        msg.reply('**هلا بيك :heart: **');
    }
});

client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
        msg.reply('**و عليكم السلام :heart: **');
    }
});
client.on('message', msg => {
  if (msg.content === prefix + 'inv') {
      msg.author.send(`رابط اضافه البوت الى سيرفرك
      https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`) 
      msg.react("✅").catch(error => {
      msg.react("❌")})
    }
});


//=============================== - [ end-message ] - ======================================


//=============================== - [ welocme ] - ======================================
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`🌹  ولكم نورت السيرفر🌹 
👑اسم العضو  ${member}👑  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`رابط السيرفر الخاص في البوت 
https://discord.gg/jyKqshn`) 
}).catch(console.error)
});
//=============================== - [ end-welocme ] - ======================================



//=============================== - [ help ] - ======================================

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "help") {
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "**Please Check My Permission Embed_Links** "
      );
    let help = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(`
          \`General\`

        > **${prefix}user** - **${prefix}server** - **${prefix}avatar**
         > **${prefix}roles** - **${prefix}ping** - **${prefix}emojis**
         > **${prefix}find** - **${prefix}discrim** - **${prefix}inv**
         > **${prefix}tax** - **${prefix}roll** - **${prefix}botinfo**
         > **${prefix}invite**
        
        \`Moderation\`

        > **${prefix}kick** - **${prefix}ban** - **${prefix}unban**
         > **${prefix}mute** - **${prefix}unmute** - **${prefix}lock**
         > **${prefix}unlock** - **${prefix}clear** - **${prefix}nick**
         > **${prefix}move** - **${prefix}say** - **${prefix}embed**
         
         \`Ticket\`

        > **${prefix}new** - **${prefix}add** - **${prefix}remove**
        > **${prefix}rename** - **${prefix}close**
         

         \`games\`
        > **${prefix}xo**

         **${prefix}help <cmd>**
`)

      .setFooter(message.author.username, message.author.avatarURL())
      .setThumbnail(message.guild.iconURL())
      .setTimestamp();
    message.channel.send(help);
  }
});


//=============================== - [ end-help ] - ======================================


client.on("message", message => {
if(message.content.startsWith(prefix + 'user') || message.content.startsWith(prefix+'id') || message.content.startsWith(prefix+'معلوماتي')){
moment.locale("en-TN");
var args = message.content.split(" ");
var user = message.mentions.users.first() || client.users.cache.get(args[1]) || message.author;
let roles = message.guild.member(user).roles.cache.map(m => "<@&"+m+">").join(" ")
if (!user1[user.id])
user1[user.id] = {
cusname: `${message.author.username}`,
};
let info = new Discord.MessageEmbed()
.setThumbnail(`${message.author.displayAvatarURL()}`)
.setColor("RANDOM")
.setDescription(`** \`معلومات\` ${user.username}**

> 📋 الاسم : \n**\`${user.username}\`** 
 
> 🎫 الحاله : \n**\`${user.presence.status}\`**
 
> ℹ️ تاريخ الانضمام للدسكورد : \n**\`${moment(user.createdTimestamp).format("YYYY/M/D HH:mm:ss")}\`**
 
> 💢 تاريخ الانضمام للسيرفر : \n**\`${moment(user.joinedAt).format("YYYY/M/D HH:mm:ss")}\`**`)
.setFooter(`بطلب من ${message.author.username}`)
message.channel.send(info)
}
if (message.content.toLowerCase() === prefix + "help user") {
let user = new Discord.MessageEmbed()
.setTitle(`الامر: user`)
.addField("Usage", `${prefix}user - ${prefix}user @user`)
.addField("الاختصارات", `${prefix}id , ${prefix}معلوماتي`)
.addField("Informatiozn", "Info Users");
message.channel.send(user);
}});



client.on("message", message => {
  if (message.content.toLowerCase().startsWith(`${prefix}avatar`)) {
    let args = message.content.split(" ")
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "> **Please Check My Permission Embed_Links** "
      );
    let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
    if (user.avatarURL() === null)
      return message.channel.send(
        ` ${user.username} , this user has not have avatar.`
      );
    let avatar = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL())
      .setImage(user.avatarURL({dynamic : true}))
      .setTitle(`Avatar Link`)
      .setURL(user.avatarURL())
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.avatarURL()
      );
    message.channel.send(avatar);
  }
  if (message.content.toLowerCase() === prefix + "help avatar") {
    let avatar = new Discord.MessageEmbed()
      .setTitle(`Command: avatar`)
      .addField("Usage", `${prefix}avatar - ${prefix}avatar @user`)
      .addField("Information", "avatar Member");
    message.channel.send(avatar);
  }
});








client.on('message', message => {
    if (message.content.startsWith(prefix + "botinfo")) {
    message.channel.send({
        embed: new Discord.MessageEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``Info Bot🤖`` ')
            .addField('``👀 | سرعه استجابه البوت``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``📂 | رامات البوت``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``🌐 | عدد الخوادم``', [client.guilds.cache.size], true)
            .addField('``💬 | عدد الشاتات``' , `[ ${client.channels.cache.size} ]` , true)
            .addField('``👦 | عدد المتسخدمين``' ,`[ ${client.users.cache.size} ]` , true)
            .addField('``⭐ | اسم البوت``' , `[ ${client.user.tag} ]` , true)
            .addField('``🆔️ | ايدي البوت``' , `[ ${client.user.id} ]` , true)
                  .addField('``📎 | برفكس البوت``' , `[ ${prefix} ]` , true)
                  .addField('``ℹ | لغه برمجة البوت``' , `[ Java Script & python ]` , true)
                  .setFooter(`info bot ${client.user.username}`)
    })
}
});






//=============================== - [ admin ] - ======================================
client.on('message', message => {
if(message.author.bot) return undefined;
 if (message.content.startsWith(prefix + 'ban') || message.content.startsWith(prefix +'حضر')){
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
return 
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
return message.channel.send("**> You dont have **BAN_MEMBERS** Permission**")
var args = message.content.split(" ");
var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if(!user) return message.channel.send(`**> Command Usage:**${prefix}ban @user reason`)
let reason = message.content.split(" ").slice(2).join(" ");
user.ban(reason)
message.channel.send(`**> ${user} Banned from the server :airplane:**`)

}
if (message.content.toLowerCase() === prefix + "help ban") {
let ban = new Discord.MessageEmbed()
.setTitle(`Command: ban`)
.addField("Usage", `${prefix}ban @user
${prefix}حضر
طير`)
.addField("Information", "Ban Members");
message.channel.send(ban);
}
})



/////Kick
client.on('message', message => {
if(message.author.bot) return undefined;
 if (message.content.startsWith(prefix + 'kick') || message.content.startsWith('طرد')){
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
return 
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
return message.channel.send("**> You dont have **KICK_MEMBERS** Permission**")
var args = message.content.split(" ");
var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if(!user) return message.channel.send(`**> Command Usage:**${prefix}kick @user reason`)
let reason = message.content.split(" ").slice(2).join(" ");
user.kick(reason);
if(!user.bannable) return message.reply(`**> I dont have permission to ban**`);
message.channel.send(`**> ${user} Kicked from the server :airplane:**`)
 }
if (message.content.toLowerCase() === prefix + "help kick") {
let kick = new Discord.MessageEmbed()
.setTitle(`Command: Kick `)
.addField("الاستعمال", `**${prefix}kick @user**\n**${prefix}طرد @user**`)
.addField("Information", "kick Members");
message.channel.send(kick);
}
})





client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first()
if (message.content.startsWith(prefix + "unmute") || message.content.startsWith(prefix + "تكلم")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**لا يوجد اديك الصلاحيات الكلافيه**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**لا يوجد لديا الصلاحيات الكافيه**"
      );
    if (!user) return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`✅ muted @${user.username} from the text! 🤐`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});



client.on('message' , message =>{
  let commands = message.content.split(" ");
  if(commands[0] == prefix + "embed"){
  if(!message.guild) return;
if(!message.guild.member(message.author).hasPermission("EMBED_LINKS")) return message.reply("**You Dont Have [--EMBED_LINKS--] Permission .**");
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Please Check My Role Permission To [--EMBED_LINKS--]	");
  var args = message.content.split(" ").slice(1).join(' ')
  if (!args){
      return message.channel.send("`Usage : "+prefix+"embed <message>`");
  }
  message.delete()
  var embed = new Discord.MessageEmbed()
  .setAuthor(`message embed ${client.user.username}`, message.author.avatarURL())
  .setThumbnail(message.guild.iconURL())
  .setColor(`Black`)
  .setDescription(`${args}`)
  .setFooter(`By ${message.author.tag}`)
  message.channel.send(embed);
  }
});

client.on("message",message => {
	var args = message.content.split(" ");
	var command = args[0];
	var emojisname = args[1];
	var emojislink = args[2];
	if (command === prefix + "emoji-add"){
		if (!message.guild){
			return message.channel.send("Only SERVER Commands");
		}
		if (!message.guild.member(client.user).hasPermission("MANAGE_EMOJIS")){
			return message.channel.send("لا تتوفر لدى البوت صلاحية  `MANAGE_EMOJIS`");
		}
		if(!message.guild.member(message.author).hasPermission("MANAGE_EMOJIS")) {
			return message.channel.send("لا تتوفر لديك صلاحيات `MANAGE_EMOJIS`");
		}
		if(!emojisname){
			return message.channel.send("يرجى ادراج اسم الايموجي");
		}
		if (!emojislink){
			return message.channel.send("يرجى ادراج رابط الايموجي");
		}
		message.guild.emojis.create(emojislink, emojisname).then(emoji =>{
			message.channel.send("Emoji Created . <:"+emoji.name+":"+emoji.id+">")
		}).catch(err => message.channel.send("يجب ان يكون حجم الصورة اقل من `256` كيلوبايت"));
	}
});

/*
client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send("Thanks for invite me")
});
*/



const logid = "750408623913697370"; // ايدي روم اللوق
client.on("guildCreate" , guild =>{
	var logchannel = client.channels.cache.get(logid);
	if(logchannel){
		let embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setDescription(` ** 
__Bot Status__
:desktop: :  ${client.guilds.cache.size}
:busts_in_silhouette: : ${client.users.cache.size}
**
`) 
    .setTimestamp()
	.setFooter('(bot info)')
	logchannel.send(embed);
	}
});


client.on("guildDelete" , guild =>{
	var logchannel = client.channels.cache.get(logid);
	if(logchannel){
		let embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setDescription(` ** 
__Bot Status__
:desktop: :  ${client.guilds.cache.size}
:busts_in_silhouette: : ${client.users.cache.size}
**
`) 
    .setTimestamp()
	.setFooter('(bot info)')
	logchannel.send(embed);
	}
});







client.on('message' , message =>{
  let commands = message.content.split(" ");
  if(commands[0] == prefix + "say"){
  if(!message.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Dont Have `MANAGE_MESSAGES` Permission .**");
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Please Check My Role Permission To `MANAGE_MESSAGES`");
  var args = message.content.split(" ").slice(1).join(' ')
  if (!args){
      return message.channel.send("`Usage : "+prefix+"say <message>`");
  }
  message.delete()
  message.channel.send(args);
  }

});



  /////lock channeol
  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "lock" || message.content.toLowerCase() === prefix + "قفل" || message.content.toLowerCase() === "قفل") {
      if (!message.channel.guild || message.author.bot) return;
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel
          .send("**Please Check Your Permssion**")
          .then(m => m.delete({ timeout: 5000 }));
      message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false });
      let lock = new Discord.MessageEmbed()
        .setDescription("```تم قفل الشات بواسطة : " + message.author.username + "```")
        .setColor("None");
      message.channel.send(`🔒 <#${message.channel.id}> تم قفل`);
    }
    if (message.content.toLowerCase() === prefix + "unlock" || message.content.toLowerCase() === prefix + "فتح" || message.content.toLowerCase() === "فتح") {
      if (!message.channel.guild || message.author.bot) return;
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel
          .send("**Please Check Your Permssion**")
          .then(m => m.delete({ timeout: 5000 }));
      message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true });
      let unlock = new Discord.MessageEmbed().setDescription(
        "```تم فتح الشات بواسطة : " + message.author.username + "``` "
      );
      message.channel.send(`🔓 <#${message.channel.id}> تم فتح`);
    }
    if (message.content.toLowerCase() === prefix + "help lock") {
      let lock = new Discord.MessageEmbed()
        .setTitle(`Command: lock `)
        .addField("Usage", `${prefix}lock | قفل`)
        .addField("Information", "lock Channel");
      message.channel.send(lock);
    }
    if (message.content.toLowerCase() === prefix + "help unlock") {
      let unlock = new Discord.MessageEmbed()
        .setTitle(`Command: unlock `)
        .addField("Usage", `${prefix}unlock | فتح`)
        .addField("Information", "unlock Channel");
      message.channel.send(unlock);
    }
  });

  const mute = JSON.parse(fs.readFileSync("./mute.json"))
client.on("message", async message => {
if(message.content.startsWith(prefix + "mute")) {
let timefilter;
if(!message.guild.member(message.author).hasPermission("MUTE_MEMBRS"))
return;
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
return message.channel.send(":rolling_eyes: - I couldn't mute that user. Please check my permissions and role position.")
let args = message.content.split(" ")
let user = message.mentions.users.first() || message.guild.members.cache.get(args[1])
if(!user) return message.channel.send("**:rolling_eyes: - I can't find this member**")
let Timer = message.content.split(" ").slice(2).join(" ");
if (!Timer) return message.channel.send("**Please Type Mute Time `1m` `1h` `1d` `1w` `1m` `1y`**")
let mute = message.guild.roles.cache.find(role => role.name === "Muted") 
if(!mute) 
mute = await message.guild.createRole({name: "Muted",color: "#000000",permissions:[]})
message.guild.channels.cache.forEach(async channel => {await channel.createOverwrite(mute, {SEND_MESSAGES: false,ADD_REACTIONS: false});});
fs.writeFile("./mute.json", JSON.stringify(mute), err => {
message.guild.member(user).roles.add(mute)
message.channel.send("**:white_check_mark: @"+user.username+" has been muted**")
if ((Timer = "15m")) {timefilter = 150000;
} else if ((Timer = "30m")) {timefilter = 300000;} else if ((Timer = "1h")) {timefilter = 600000;
} else if ((Timer = "3h")) {timefilter = 1800000;} else if ((Timer = "1d")) {timefilter = 14400000;
} else if ((Timer = "3d")) {timefilter = 43200000;} else if ((Timer = "1w")) {timefilter = 604800000;
} else if ((Timer = "1m")) {timefilter = 60000;} else if ((Timer = "2m")) {timefilter = 120000;
} else if ((Timer = "3m")) {timefilter = 180000;} else if ((Timer = "4m")) {timefilter = 240000;
} else if ((Timer = "5m")) {timefilter = 300000;} else if ((Timer = "1y")) {timefilter = 31557600000;
} else if ((Timer = "2y")) {timefilter = 63115200000;} else if ((Timer = "3y")) {timefilter = 94672800000;
} else if ((Timer = "4y")) {timefilter = 126230400000;} else if ((Timer = "5y")) {timefilter = 157788000000;}
else if ((Timer = "1s")) {timefilter = 1000;}
setTimeout(() => {
message.guild.member(user).roles.remove(mute);
message.channel.send("Unmuted User @" + user.username + " : Time Up");
}, timefilter);
})}})
  
  client.on("message", message => {
    if (message.content.startsWith(prefix + "nick")) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
        return message.channel.send("Please Check Your Permission.");
      if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
        return message.channel.send("Please Check My Permission.");
      let user = message.mentions.users.first();
      
      if (!user) return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
      let args = message.content
        .split(" ")
        .slice(2)
        .join(" ");
      if (!args)
        message.guild
          .member(user)
          .setNickname("")
          .then(m => {
            message.channel.send(
              " " + user.username + " has been reseted nickname "
            );
          })
          .catch(error => {
            message.channel.send("Error: **" + error.message + "**");
          });
      message.guild
        .member(user)
        .setNickname(args)
        .then(m => {
          let embed = new Discord.MessageEmbed()
            .setTitle("Nicknamed User!")
            .setDescription(
              "User: ```" +
                user.username +
                "```\nBy: ```" +
                message.author.username +
                "```\nNickname: ```" +
                args +
                "``` "
            );
          message.channel.send(embed);
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "** ");
        });
    }
    if (message.content.toLowerCase() === prefix + "help nick") {
      let nick = new Discord.MessageEmbed()
        .setTitle(`Command: nick`)
        .addField("Usage", `${prefix}nick @user nickname`)
        .addField("Information", "Nicknames");
      message.channel.send(nick);
    }
  });

  client.on("message", message => {
    if (message.content.startsWith(prefix + "move")) {
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[1])
      );
      if (!message.channel.guild || message.author.bot) return;
      if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
        return message.channel.send("Please Check Your Permission");
      if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
        return message.channel.send("Please Check My Permission");
      if (!message.member.voice.channel)
        return message.channel.send("Your are not in voice channel");
      if (!user) return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
      if (!message.guild.member(user.id).voice.channel)
        return message.channel.send(
          `**${user.user.username}** Has not in Voice channel`
        );
      message.guild
        .member(user.id)
        .voice.setChannel(message.member.voice.channel.id)
        .then(() => {
          message.channel.send(
            `**${user.user.username}** has been moved to **${
              message.guild.member(message.author).voice.channel.name
            }**`
          );
        });
    }
    if (message.content.toLowerCase() === prefix + "help move") {
      let move = new Discord.MessageEmbed()
        .setTitle(`Command: move`)
        .addField("Usage", `${prefix}move @user`)
        .addField("Information", "move members");
      message.channel.send(move);
    }
  });
  
  ///Role
  client.on("message", message => {
    let cmd = message.content.toLowerCase().split(" ")[0];
    if (cmd === `${prefix}role` ||cmd === `${prefix}خذ` || cmd === `${prefix}تفضل` ) {
      if (!message.channel.guild || message.author.bot) return;
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[1])
      );
      var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
      var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
      if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
        return message.channel.send(`I Need Permissions !!`);
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!user) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
      if (!role) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
      if (!role1) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
      if (user.roles.cache.find(c => c.id === role1.id))
        return user.roles.remove(role1).then(() => {
  message.channel.send(`**>>> Role \`${role1.name}\` removed to ${user.user}**`);
  }).catch(err => message.channel.send("Error: **" + err.message + "**"));
  user.roles.add(role1).then(() => {
          message.channel.send(
            `**>>> Role \`${role1.name}\` added to ${user.user}**`
          );
        })
        .catch(err => message.channel.send("Error: **" + err.message + "**"));
    }
    if (message.content.toLowerCase() === prefix + "help role") {
      let role = new Discord.MessageEmbed()
        .setTitle(`Command: role`)
        .addField("Usage", `\`\`\`${prefix}role @user role
  ${prefix}خذ @user role
  تفضل @user role\`\`\``)
        .addField("Information", "Change Roles");
      message.channel.send(role);
    }
  });
  
  client.on("message", async message => {
    if (message.content.startsWith(prefix + "vkick")) {
      let args = message.content.split(" ");
      let user = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[1])
      );
      if (!message.channel.guild || message.author.bot) return;
      if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
        return message.channel.send("Please Check Your Permission");
      if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
        return message.channel.send("Please Check My Permission");
      if (!message.member.voice.channel)
        return message.channel.send("Your are not in voice channel");
      if (!user) return message.channel.send(`**>>> ${prefix}vkick <@mention or id>**`);
      if (!message.guild.member(user).voice.channel)
        return message.channel.send(
          `**${user.user.username}** Has not in Voice channel`
        );
      await user.voice.kick();
      message.channel.send(
        `**${user.user.username}** has been kicked from **Voice Channel**`
      );
    }
    if (message.content.toLowerCase() === prefix + "help vkick") {
      let vkick = new Discord.MessageEmbed()
        .setTitle(`Command: vkick`)
        .addField("Usage", `${prefix}vkick @user`)
        .addField("Information", "voice kick members");
      message.channel.send(vkick);
    }
  });
  
  client.on("message", message => {
  if (message.content.startsWith(prefix + "vmute")) {
      if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Please Check Your Permission!");
      if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Please Check My Permission!");
      let user = message.mentions.users.first();
          if (!user) return message.channel.send(`**>>> ${prefix}vmute <@mention or id>**`);
      if (!message.guild.member(user).voice.channel)
        return message.channel.send(
          `**${user.user.username}** this user has not in voice channel`
        );
      message.guild.member(user).voice.setMute(true);
      return message.channel.send(
        "@" + user.username + " Has Been Voice Muted! "
      );
    }
  });
  client.on("message", message => {
  if (message.content.startsWith(prefix + "vunmute")) {
      if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Please Check Your Permission!");
      if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Please Check My Permission!");
      let user = message.mentions.users.first();
              if (!user) return message.channel.send(`**>>> ${prefix}vunmute <@mention or id>**`);
      if (!message.guild.member(user).voice.channel)
        return message.channel.send(
          `**${user.user.username}** this user has not in voice channel`
        );
      message.guild.member(user).voice.setMute(false);
      return message.channel.send(
        "@" + user.username + " Has Been Voice Muted! "
      );
    }
  });
  
  
//=============================== - [ end-admin ] - ======================================


//=============================== - [ general ] - ======================================
  


client.on("message", message => {
  moment.locale("en-TN");
  if (message.content.toLowerCase() === prefix + "server") {
    let server = new Discord.MessageEmbed()
    .setAuthor('🔗معلومات السيرفر',message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.author.username,message.author.displayAvatarURL({dynamic : true}))
      .setColor('RANDOM')
      .setTimestamp()
      .addField(`معلومات المالك`, `**🆔 | ايدي السيرفر: ${message.guild.id}
👑 | المالك: ${message.guild.owner}**`)
      .addField(`معلومات اكثر`
        ,
        `**👦 | الاعضاء: \`${
        message.guild.members.cache.size}\` 
🤖 | البوتات: \`${message.guild.members.cache.filter(m=>m.user.bot).size}\`
⭐ | لفل البوست: \`${message.guild.premiumSubscriptionCount}\`
💤 | روم النوم: <#${message.guild.afkChannelID || "non"}>
💫 | وقت النوم:\`${message.guild.afkTimeout}\`
🔔 | نضام الاشعارات:\`${message.guild.defaultMessageNotifications}\`
🔐 | مستوى الامان: \`${message.guild.verificationLevel}\`
😍 | الروم الاساسيه: \`${message.guild.systemChannelID || "non"
        }\`
🔊 | عدد الرومات: \`${message.guild.channels.cache.filter(m => m.type === 'voice').size} \`
💬 | عدد الشاتات:\`${message.guild.channels.cache.filter(m => m.type === 'text').size}\`
👮 | عدد الرتب: \`${message.guild.roles.cache.size}\`
😀 | عدد الايموجي:\`${message.guild.emojis.cache.size}\` **`
      )
      .addField(
        "» تم انشاء السيرفر في تاريخ:",
        `**${moment(message.guild.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )}**`
      )
      .addField("» لرؤيه المزيد", `**${prefix}roles - ${prefix}emojis**`);
    message.channel.send(server);
  }
  if (message.content.toLowerCase() === prefix + "help server") {
    let hlp = new Discord.MessageEmbed()
      .setTitle(`Command: Server `)
      .addField("Usage", `${prefix}server`)
      .addField("Information", "Information server");
    message.channel.send(hlp);
  }
});



client.on("message", message =>{
  if(message.content.startsWith(prefix + "roles")) {
  const f = '                        ' 
  const roles = message.guild.roles.cache.map(role => {
  const d = f.slice(role.name.length)
  return `${role.name}${d}${role.members.size} Members`}).join(`\n`)
  message.channel.send(`\`\`\`${roles}\`\`\``)
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let emojis = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All roles For Server");
    message.channel.send(emojis);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "emojis") {
    let emojis = message.guild.emojis.cache.map(e => `${e}`).join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Emojis")
      .setDescription(emojis);
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help emojis") {
    let emojis = new Discord.MessageEmbed()
      .setTitle(`Command: emojis `)
      .addField("Usage", `${prefix}emojis`)
      .addField("Information", "Show All Emojis For Server");
    message.channel.send(emojis);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "aserver") {
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "> **Please Check My Permission Embed_Links** "
      );
    if (message.guild.iconURL() === null)
      return message.channel.send(`This server has not have avatar.`);
    let avatar = new Discord.MessageEmbed()
      .setImage(message.guild.iconURL( {dynamic: true}))
      .setTitle(`Avatar Server Link`)
      .setURL(message.guild.iconURL())
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.avatarURL()
      );
    message.channel.send(avatar);
  }
  if (message.content.toLowerCase() === prefix + "help aserver") {
    let avatar = new Discord.MessageEmbed()
      .setTitle(`Command: aserver`)
      .addField("Usage", `${prefix}aserver`)
      .addField("Information", "avatar server");
    message.channel.send(avatar);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "ping") {
    message.channel
      .send({ embed: new Discord.MessageEmbed().setDescription("Loading....") })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.MessageEmbed().setDescription("Pinging....")
          });
        }, 10);
        let start = Date.now();
        setTimeout(function() {
          m.edit({
            embed: new Discord.MessageEmbed().setDescription(
              `Time Take : ${Date.now() - start}ms \nPing : ${client.ws.ping}`
            )
          });
        }, 50);
      });
  }
  if (message.content.toLowerCase() === prefix + "help ping") {
    let ping = new Discord.MessageEmbed()
      .setTitle(`Command: ping`)
      .addField("Usage", `${prefix}ping`)
      .addField("Information", "Ping Bot");
    message.channel.send(ping);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "find")) {
    var args1 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let size = 1;
    if (message.author.bot) return;
    if (!message.guild.member) return;
    if (!args1)
      return message.channel.send(
        `**> ${prefix}find (A word or letter from the name)**`
      );

    var playersFind = new Discord.MessageEmbed()
      .setTitle(`**> Search : \`\`${args1}\`\`**`)
      .setDescription(
        `**>  Members Find : \`\`${
          message.guild.members.cache.filter(m =>
            m.user.username.toUpperCase().includes(args1.toUpperCase())
          ).size
        }\`\` .\n\n\`\`\`═════════════\n\n${message.guild.members.cache
          .filter(m =>
            m.user.username.toUpperCase().includes(args1.toUpperCase())
          )
          .map(m => size++ + ". " + m.user.tag)
          .slice(0, 20)
          .join("\n") ||
          `i can't find any user with the words`}\n\n═════════════\`\`\`**`
      )
      .setColor("GRAY")
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL());

    message.channel.send(playersFind);
    message.delete();
  }
  if (message.content.toLowerCase() === prefix + "help find") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: find`)
      .addField("Usage", `${prefix}find <user>`)
      .addField("Information", "find any user by words");
    message.channel.send(move);
  }
});



client.on("message", message => {
  if (message.content.startsWith(prefix + "discrim")) {
    var args1 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let size = 1;
    if (message.author.bot) return;
    if (!message.guild.member) return;

    if (args1 == "") {
      var tagkplayer = message.author.discriminator;
    } else {
      var tagkplayer = args1;
      if (isNaN(args1))
        return message.channel.send(`**> ${prefix}help discrim**`);
      if (args1.length != 4) return message.channel.send("**> Put 4 numbers**");
    }

    var playersFind = new Discord.MessageEmbed()
      .setTitle(`**> Search tag : \`\`#${tagkplayer}\`\`**`)
      .setDescription(
        `**>  Members They have tag  : \`\`${
          client.users.cache.filter(m => m.discriminator == tagkplayer).size
        }\`\` .\n\n\`\`\`═════════════\n\n${client.users.cache
          .filter(m => m.discriminator == tagkplayer)
          .map(m => size++ + ". " + m.tag)
          .slice(0, 20)
          .join("\n") ||
          `i can't find member with this tag`}\n\n═════════════\`\`\`**`
      )
      .setColor("GRAY")
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());

    message.channel.send(playersFind);
    message.delete();
  }
  if (message.content.toLowerCase() === prefix + "help discrim") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: discrim`)
      .addField("Usage", `${prefix}discrim Or ${prefix}discrim 0001`)
      .addField("Information", "search on users from tag");
    message.channel.send(move);
  }
});



client.on("message", message => {
if(message.content.toLowerCase().startsWith(prefix + "roll")){
let roll = message.content.split(" ").slice(1).join(" ")
if(isNaN(roll)) return message.channel.send("**Number.!**")
if(!roll) return message.channel.send(`${Math.floor(Math.random() * 100)}`)
message.channel.send(Math.floor(Math.random() * roll))
}})



/*
client.on('guildMemberAdd', member => {
    if (!member.author.bot) return;
  const moment = require("moment")
        const welcomer = member.guild.channels.cache.find(
            (d) => d.name == 'welcome'
        );
        if (!welcomer) return;
        if (welcomer) {
            moment.locale('en');
            var m = member.user;
            let Discord = require('discord.js');

            member.guild.fetchInvites().then((guildInvites) => {
                setTimeout(() => {
                    const invite = guildInvites.find((i) => i.uses);

                    let embed = new Discord.MessageEmbed()
                        .setAuthor(member.user.tag, member.user.avatarURL({dynamic : true}))
                        .setTitle('**لقد انضم عضو جديد**')
                        .setThumbnail(member.user.avatarURL())
                        .setTimestamp()
                        .setDescription(`اسم العضو : ${member}
اضيف بواسطه: <@${invite.inviter.id}>
رابط الدعوه : https://discord.gg/${invite.code}
عمر الحساب : ${moment(member.user.createdTimestamp).fromNow()}
العضو رقم : ${member.guild.memberCount}`
                        );
                        
                    welcomer.send(embed)
                  }, 2000);
            });
        }
});


client.on('guildMemberAdd', member => {
  const moment = require("moment")
        const welcomer = member.guild.channels.cache.find(
            (d) => d.name == 'invite'
        );
        if (!welcomer) return;
        if (welcomer) {
            moment.locale('en');
            var m = member.user;
            let Discord = require('discord.js');

            member.guild.fetchInvites().then((guildInvites) => {
                setTimeout(() => {
                    const invite = guildInvites.find((i) => i.uses);
                    welcomer.send(`${member}**joined**; invite by <@${invite.inviter.id}>`)
                  }, 2000);
            });
        }
});

*/

client.on("message", async message => {
  if (message.content.startsWith(prefix + 'invite') || message.content.startsWith(prefix + 'دعواتي')) {
      var nul = 0
      var guild = message.guild
      await guild.fetchInvites()
          .then(invites => {
              invites.forEach(invite => {
                  if (invite.inviter === message.author) {
                      nul += invite.uses
                  }
              });
          });
      if (nul > 0) {
          var embed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.avatarURL())
              .setColor("#000000")
              .addField(`لقد قمت بدعوة`, ` **${nul}** شخص`)
          message.channel.send({ embed: embed });
          return;
      } else {
          var embed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.avatarURL())
              .setColor("#000000")
              .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

          message.channel.send({ embed: embed });
          return;
      }
  }
})





client.on("message" , message => { 
     if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "**Please Check My Permission Embed_Links** "
      );
	var args = message.content.split(" ");
	var command = args[0];
	var anum = args[1];
	var tax = 5; 
	if(command == prefix + "tax"){
		if(!anum){
			return message.reply("`"+command+" <number>`");
		}
		var fnum = Math.floor(anum);
		if(fnum < 0 || fnum == NaN || !fnum){
			return message.reply("**يجب ان تكون القيمة صحيحة.**");
		}
		var taxval = Math.floor(fnum*(tax/100));
    var total = Math.floor(fnum-taxval);
    var tax1 = new Discord.MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setFooter(`طلب يواسطه ${message.author.username}`)
    .setTitle("الضريبه")
    .setDescription(`**
    المبلغ الأساسي : ${fnum}
    الضريبة : ${tax}%
    قيمة الضريبة : ${taxval}
    المبلغ مع الضريبة : ${total}
    **	`)
		message.channel.send(tax1);
	}
});


//=============================== - [ tickets ] - ======================================

const k2rba = JSON.parse(fs.readFileSync("./tickets.json", "utf8")); 
function k2br() {
    (require ("fs")).writeFileSync ("./tickets.json", JSON.stringify (k2rba, null, 4))
}

client.on("message", message => {
  var args = message.content
    .split(" ")
    .slice(1)
    .join("-");
if (message.content.startsWith(prefix + "new") || message.content.startsWith(prefix + "تكت")) {
  
let ticketReason = message.content.split(" ").slice(1).join(" ");
if (!ticketReason) return message.channel.send(`**🙄 | يجيب عليك كتابه السبب بعد الامر**`)
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**🙄 | لا يوجد لدي الصلاحيات الكافيه**");
    let Support = message.guild.roles.cache.find(
      role => role.name === ticketrole
    );
    let everyone = message.guild.roles.cache.find(
      role => role.name === "@everyone"
    );
    if (!Support)
      return message.channel.send(`**🙄 | يجب وجود رتبه باسم \`${ticketrole}\`**`);
    if (
      message.guild.channels.cache.some(n => n.channelname === `ticket-${message.author.username}`)) return message.channel.send(`**Your Already Have Ticket.**`);
          let ticketCategory = message.guild.channels.cache.find(kah => kah.name === `${nCategory}`);
     if (!ticketCategory) return message.channel.send(`**🙄 | يجب وجود قناه باسم \`${nCategory}\`**`)
  if (!k2rba[message.author.id])
k2rba[message.author.id] = {
limt: 0,
channelname: "wan",
};
let limttick = 1
        if(k2rba[message.author.id].limt === limttick) return message.reply(`**ERORR: You need to close a ticket from \`${k2rba[message.author.id].limt}\`tickets.**`) 
    message.guild.channels.create(`ticket-${message.author.username}`, { type: "text" })
      .then(async ticket => {
        ticket.setParent(ticketCategory)
        ticket.createOverwrite(Support, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
        ticket.createOverwrite(everyone, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
        });
        ticket.createOverwrite(message.author, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
      if (k2rba[message.author.id])
     k2rba[message.author.id].channelname = `ticket-${message.author.username}`
  k2rba[message.author.id].limt = `${k2rba[message.author.id].limt}`*1+2-1
    k2br();
        let embed = new Discord.MessageEmbed().setDescription(
          `Your Ticket <#${ticket.id}>`
        );
        message.channel.send(embed);
        let embed1 = new Discord.MessageEmbed()
          .setDescription(`معلومات التكت
            الاسم : \`\`\`${message.author.username} \`\`\`
                  الايدي : \`\`\`${message.author.id}\`\`\`
                  سبب التكت : \`\`\`${ticketReason}\`\`\`
                  عدد التكتات : \`\`\`${eval(`${limttick} - ${k2rba[message.author.id].limt}`)}\`\`\` `)
          .setFooter(message.author.username, message.author.avatarURL())
          .setTimestamp(`${message.author.username}`);
        ticket.send(embed1);
        ticket.send(`${Support} ..`).then(m => { 
        setTimeout(function() {
          m.edit(`**انتضر الرد من مسؤال التكتات | 👋**`);
        }, 5000)
          });
    });
  }
if (message.content.startsWith(prefix + "add")) {
  
    let args = message.content.split(" ")
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if(!user) {
    message.channel.send(`**حدد الشخص , ${message.author}**`);
    return;
  }
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**يمكن استعمال هاذ الامر في التكت فقط, ${message.author}**`);
 message.channel.createOverwrite(user.id,
    {
      'VIEW_CHANNEL': true,
      'SEND_MESSAGES': true
   });
    let embed = new Discord.MessageEmbed()
      .setTitle('تم اضافه')
      .setDescription(`**الاسم :**
      \`\`\`${user.username || user.user.username}\`\`\`
      **بواسطه:**
\`\`\`${message.author.username}\`\`\` `,true)
      .setTimestamp()
      .setFooter(`اضيف بواسطه: ${message.author.username}`, message.author.avatarURL());
    //message.channel.send(`${message.author.tag}الى التكت  ${user} اضاف`);
    message.channel.send(`${user} تم اضافتك للتكت`);
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "remove")) {
  
    let args = message.content.split(" ")
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if(!user) {
    message.channel.send(`**حدد الشخص لحذفه من التكت, ${message.author}**`);
    return;
  }
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**🙄 | حدد الشخص داخل التكت, ${message.author}**`);
 message.channel.createOverwrite(user.id,
    {
      'VIEW_CHANNEL': false,
      'SEND_MESSAGES': false
   });
    let embed = new Discord.MessageEmbed()
      .setTitle('Removed')
          .addField(
            `**User:**`,
            `\`\`\`${user.username || user.user.username}\`\`\``
          ,true )
          .addField(
            `**By:**`,
            `\`\`\`${message.author.username}\`\`\``
          ,true )
      .setTimestamp()
      .setFooter(`removed by: ${message.author.username}`, message.author.avatarURL());
    message.channel.send(`${message.author.tag} removed ${user} to the ticket`);
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "rename")) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check My Permission**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
    if (!args)  
      return message.channel.send("**Please Type To Can Reanmed Ticket**");
    message.channel.setName(`${args}`);
    let embed = new Discord.MessageEmbed()
      .setDescription(`Ticket renamed To => ${args}`)
      .setTimestamp()
      .setFooter(`By :${message.author.username}`, message.author.avatarURL());
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "close")) {
    let args = message.content.split(" ")
    let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check My Permission**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
      if (!user) message.channel.send("**>>> mention to user or put him id**");
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
      let embed = new Discord.MessageEmbed()
      .setDescription("**```css\nTicket - Closing\nClosing your ticket in 5 seconds```**");
      message.channel.send(embed);
    setTimeout(function(){
      if (k2rba[message.author.id])
      k2rba[user.id].limt = `${k2rba[user.id].limt}`*1+2-1-1-1
      k2br();
      message.channel.delete();
    }, 5000);
  }
  if (message.content.toLowerCase() === prefix + "help new") {
    let newT = new Discord.MessageEmbed()
      .setTitle(`Command: new `)
      .addField("Usage", `${prefix}new [Reason]`)
      .addField("Information", "Open Ticket");
    message.channel.send(newT);
  }
  if (message.content.toLowerCase() === prefix + "help rename") {
    let rename = new Discord.MessageEmbed()
      .setTitle(`Command: rename `)
      .addField("Usage", `${prefix}rename [args]`)
      .addField("Information", "Renamed Ticket");
    message.channel.send(rename);
  }
});


//=============================== - [ end-ticket ] - ======================================



//games

client.on("message", async message=>{
  if(message.author.bot)return;
  function ChackWiner(score){
  for (let i = 0; i < winningConditions.length; i++) {
          let a = score[winningConditions[i][0]];
          let b = score[winningConditions[i][1]];
          let c = score[winningConditions[i][2]];
          if (a === '' || b === '' || c === '')continue;
          if (a === b && b === c) return true;
  }
  return false;
  }
  const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
  winningConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
    if(message.content.startsWith(prefix + "xo")){
  const member = message.mentions.users.first();
  if(!member)return message.reply("**Mention someone to play with him..**");
  var message_content = "1️⃣ 2️⃣ 3️⃣\n4️⃣ 5️⃣ 6️⃣\n7️⃣ 8️⃣ 9️⃣",
      msg = await message.channel.send('**Loading ...** Wait for the reaction :ok:'),
      game_state = ["", "", "", "", "", "", "", "", ""],
      collected = [],
      ActivePlayer = message.author.id;
  try { for (let emoji of emojis) await msg.react(emoji); } finally {msg.edit(message_content);} // يسوي الرياشكن وبعد ما يسوي يعدل للشكل الطبيعي
  const msg_two = await message.channel.send(`${message.author}`);
  const collector = msg.createReactionCollector((reaction, user) => {return emojis.includes(reaction.emoji.name) && (user.id == message.author.id || user.id == member.id);}, { time: 60 * 1000 * 5 }); // ييراكب الرياكشن اللي بيتحط علي الرسالة
  collector.on('collect', (reaction, user) => {
  reaction.users.remove(user).catch(console.error);
  if(ActivePlayer !== user.id)return;
  if(collected.find(x=> x == reaction.emoji.name))return;
  else collected.push(reaction.emoji.name);
  message_content = message_content.replace(new RegExp(reaction.emoji.name ,"g"), user.id == message.author.id ? "🇽" : "🅾️"); // يغير محتوي الرسالة بالأحديثات الجديدة
  msg.edit(message_content);
  ActivePlayer = ActivePlayer == message.author.id ? member.id : message.author.id; // نغير الدور للاعب الاخر
  msg_two.edit(`**<@${ActivePlayer}>**`);
  game_state[emojis.indexOf(reaction.emoji.name)] = user.id;
  if(ChackWiner(game_state))return msg_two.edit(`**<@${user.id}> is winner!!**`).then(()=> collector.stop()); // نشوف اذا اليوثر فاز او لا و اذا فاز يوقف مراكب الرياكشن  
  if(game_state.filter(x=> x == "").length == 0 )return msg_two.edit(`**No Winner!**`).then(()=> collector.stop());
  }).on("end",()=> msg.delete({timeout: 5000}).catch(()=> {}));
  }});








client.login(process.env.token)


