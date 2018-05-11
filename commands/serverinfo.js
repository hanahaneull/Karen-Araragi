const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Nama Server", message.guild.name)
    .addField("Dibuat pada", message.guild.createdAt)
    .addField("Bergabung pada", message.member.joinedAt)
    .addField("Total Anggota", message.guild.memberCount);

    return message.channel.send(serverembed);
}

module.exports.help = {
    name : "serverinfo"
}