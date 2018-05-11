const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bicon)
        .addField("Nama", bot.user.username)
        .addField("Tanggal Lahir", "9 Mei 2018")
        .addField("Dibuat oleh", "Serenium#1832")
        .addField("Bahasa", "Discord.JS dengan NodeJS versi 10.1.0")
        .addField("Motto", "Yang penting aku dan Serenium bisa bahagia!")
        return message.channel.send(botembed);
}

module.exports.help = {
    name : "info"
}