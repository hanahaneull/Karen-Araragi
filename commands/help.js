const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bicon)
        .setAuthor("Nih, komandonya!")
        .setFooter("v0.0.2 | Alpha - Serenium#1832")
        .addField("``k.yo``", "Karen akan menyapamu!")
        .addField("``k.info``", "Biodata Karen Araragi.")
        .addField("``k.serverinfo``", "Informasi singkat tentang server yang sedang kamu tempati.")
        .addField("``k.lapor``", "Karen akan melaporkan dengan segera!")
        .addField("``k.mute``", "Karen akan menutup mulut orang yang merepotkannya.")
        .addField("``k.kick``", "Karen akan menendang keganjilan yang kamu hadapi.")
        .addField("``k.ban``", "Karen akan melemparkan palu sakti untuk menghancurkan keganjilan tersebut.")

        return message.channel.send(botembed);
}

module.exports.help = {
    name : "help"
}