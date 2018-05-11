const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("Ini informasi yang kudapat.")
    .setColor("RANDOM")
    .addField("Nama Lengkap", message.author.tag)
    .addField("ID Pengguna", message.author.id)
    .addField("Dibuat pada", message.author.createdAt);

    message.channel.send(embed);
}

module.exports.help = {
    name : "userinfo"
}