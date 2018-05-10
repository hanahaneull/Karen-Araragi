const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

bot.on("ready", async() => {
    console.log(`${bot.user.username} sudah daring!`);
    console.log(`v0.0.2 - Alpha | Ketik k.help untuk bantuan.`);
    bot.user.setActivity("v0.0.2 | Alpha Version", {type: "PLAYING"});
});

bot.on("message", async message =>{
    if(message.author.bot) return; // Karen takkan merespon jika yang memberi perintahnya adalah Bot.
    if(message.channel.type === "dm") return; // Karen takkan merespon jika yang memberi perintahnya lewat Pesan Intim (PM).

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" "); // Komando bisa dijalankan walau ada spasi.
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}help`){ // Komando biodata Karen.
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
        .addField("``k.kick``", "Karen akan menendang keganjilan yang kamu hadapi.")
        .addField("``k.ban``", "Karen akan melemparkan palu sakti untuk menghancurkan keganjilan tersebut.")

        return message.channel.send(botembed);
    }

    if(cmd === `${prefix}yo`){
        let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Yo! Karen daze!", "Ada apa, nih? Mau ngobrol, ya?")
        return message.channel.send(botembed);
    }

    if(cmd === `${prefix}info`){ // Komando biodata Karen.
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

    if(cmd === `${prefix}serverinfo`){ // Komando info server (yang sedang kamu tempati)
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

    if(cmd === `${prefix}lapor`){ // Komando untuk melaporkan seseorang pada Karen!
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

    if(cmd === `${prefix}kick`){ // Komando untuk menendang orang dari servermu (khusus Admin!)
        let kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!kUser) return message.channel.send("Takbisa mencari user tersebut.");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Pasangkan aku role Manage Message! Supaya aku bisa membasmi kejahatan!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":bow: Keganjilan itu terlalu kuat! Aku takbisa membasminya ...");

        let kickEmbed = new Discord.RichEmbed()
        .setColor("#ff2a00")
        .addField("User yang ditendang", `${kUser} dengan ID ${kUser.id}`)
        .addField("Dilaporkan oleh", `${message.author} dengan ID ${message.author.id}`)
        .addField("Kanal", message.channel)
        .addField("Dikirimkan pada", message.createdAt)
        .addField("Alasan", reason)

        let kickchannel = message.guild.channels.find(`name`, "laporan");
        if(!kickchannel) return message.channel.send(":no_entry_sign: Kanal tersebut takbisa ditemukan.");

        message.guild.member(kUser).kick(kReason);
        kickchannel.send(kickEmbed);

        return;
    }

    if(cmd === `${prefix}ban`){
    
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
});

bot.login(tokenfile.token);