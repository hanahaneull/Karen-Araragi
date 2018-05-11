const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warning.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Kau takberhak untuk memerintahku! Dasar lemah!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Aku takbisa menemukan user tersebut.");
    let warnlevel = warns[wUser.id].warns;

    message.reply(`<@${wUser.id}> sudah memiliki ${warnlevel} peringatan.`);
}

module.exports.help = {
    name : "warnlevel"
}