const Discord = require("discord.js");

module.exports.run = async(bot, message) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("INVITE LINK OF GSC BOT!")
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("SQUAD NAMES-","You can add GSC bot by using given LINK - https://discordapp.com/api/oauth2/authorize?client_id=519485453846446110&permissions=0&scope=bot")
    

    message.channel.send(botembed);

};

module.exports.command = {
    name: 'invite',
    permission: "None",
    description: "Gives invite link!",
    usage: `generate link`,
    category: "GSC",
    enabled: true
};
