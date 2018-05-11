const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!kUser) return message.channel.send("Takbisa mencari user tersebut.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Pasangkan aku role Manage Message! Supaya aku bisa membasmi kejahatan!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":bow: Keganjilan itu terlalu kuat! Aku takbisa membasminya ...");

    let kickEmbed = new Discord.RichEmbed()
    .setColor("#ff2a00")
    .addField("User yang ditendang", `${kUser} dengan ID ${kUser.id}`)
    .addField("Dilaporkan oleh", `${message.author} dengan ID ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Dikirimkan pada", message.createdAt)
    .addField("Alasan", reason)

    let kickchannel = message.guild.channels.find(`name`, "laporan");
    if(!kickchannel) return message.channel.send(":no_entry_sign: Kanal tersebut takbisa ditemukan.");

    message.guild.member(kUser).kick(kReason);
    kickchannel.send(kickEmbed);

    return;
}

module.exports.help = {
    name : "kick"
}