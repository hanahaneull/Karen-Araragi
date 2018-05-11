const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!bUser) return message.channel.send("Takbisa mencari user tersebut.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":no_entry_sign: Pasangkan aku role Manage Members! Supaya aku bisa membasmi kejahatan!");
    if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":bow: Keganjilan itu terlalu kuat! Aku takbisa membasminya ...");

    let banEmbed = new Discord.RichEmbed()
    .setColor("#ff2a00")
    .addField("User yang dilempar palu", `${kUser} dengan ID ${kUser.id}`)
    .addField("Dilaporkan oleh", `${message.author} dengan ID ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Dikirimkan pada", message.createdAt)
    .addField("Alasan", reason)

    let banchannel = message.guild.channels.find(`name`, "laporan");
    if(!banchannel) return message.channel.send(":no_entry_sign: Kanal tersebut takbisa ditemukan.");

    message.guild.member(bMember).kick(bReason);
    banchannel.send(banEmbed);

    return;
}

module.exports.help = {
    name : "ban"
}