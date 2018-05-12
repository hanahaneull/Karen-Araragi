const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete(message.content);
    var mm = message.mentions.members.first() || message.author;
    if (!mm) return message.reply("kauperlu menyebut user tersebut!");
    var embed = new Discord.RichEmbed()
   
    .setThumbnail(mm.user.avatarURL)
    .addField("Nama Asli", `${mm.user.username}#${mm.user.discriminator}`)
    .addField("Nama Panggilan", `${mm.nickname}`)
    .addField("ID Pengguna", `${mm.id}`)
    .addField("Status", `${mm.presence.status}`)
    .addField("Dibuat pada", `${mm.user.createdAt}`)
    .setTimestamp()
    .setColor(0x00ffff)
    

    message.channel.send(embed);
}
module.exports.help = {
    name : "userinfo"
}