const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bicon)
        .setAuthor("Nih, komandonya!")
        .setFooter("v0.0.5 | Initial Release - Serenium#1832")
        .addField("``k.yo``", "Karen akan menyapamu!")
        .addField("``k.ping``", "Karen akan memberitahu perjalanan waktunya.")
        .addField("``k.info``", "Biodata Karen Araragi.")
        .addField("``k.hapus``", "Karen akan menghapus pesan yang kauinginkan.")
        .addField("``k.userinfo``", "Karen akan memberitahu biodata dirimu.")
        .addField("``k.serverinfo``", "Informasi singkat tentang server yang sedang kamu tempati.")
        .addField("``k.katakan``", "Katakan apa yang kaumau, dan Karen akan menirunya!")
        .addField("``k.admin``", "Komando khusus Admin, lo!")

        return message.channel.send(botembed);
}

module.exports.help = {
    name : "bantuan"
}