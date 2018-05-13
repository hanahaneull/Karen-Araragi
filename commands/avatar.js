const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msgEmbed = new Discord.RichEmbed()
    .setDescription(":clock1: Sebentar, aku mengambil fotomu sebentar, ya!")
    await message.channel.send(msgEmbed).then(msgEmbed => msgEmbed.delete());

    let target = message.mentions.users.first() || message.author;
    if(!message.mentions.users.first()) return message.channel.send("Kamu harus mensyen orang yang ingin kaulihat Avatarnya!");

    let targeticon = (target.displayAvatarURL)
    let avatarEmbed = new Discord.RichEmbed()
    .setTitle("Ini avatarnya!")
    .setImage(targeticon)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("v0.0.8 - Release | Serenium#1832")

    await message.channel.send(avatarEmbed);
}

module.exports.help = {
    name : "avatar"
}