const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Yo! Karen daze!", "Ada apa, nih? Mau ngobrol, ya?")
        return message.channel.send(botembed);
}

module.exports.help = {
    name : "yo"
}