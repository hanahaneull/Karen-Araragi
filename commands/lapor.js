const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rUser) return message.channel.send(":no_entry_sign: Takbisa mencari user tersebut.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("User yang dilaporkan", `${rUser} dengan ID ${rUser.id}`)
    .addField("Dilaporkan oleh", `${message.author} dengan ID ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Dikirimkan pada", message.createdAt)
    .addField("Alasan", reason)

    let reportschannel = message.guild.channels.find(`name`, "laporan");
    if(!reportschannel) return message.channel.send(":no_entry_sign: Kanal tersebut takbisa ditemukan.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
}

module.exports.help = {
    name : "lapor"
}