const { MessageActionRow, MessageButton } = require("discord-buttons");
const Command = require("../../structures/Command.js");
const { replyError, toFancyNum } = require("../../utils/constants.js");


class BanApplication extends Command {
    constructor(...args) {
        super(...args, {
            description: "Setup dabby crate channel",
            usage: "setup",
            aliases: ["setup"],
            cooldown: 60
        });
    }

    async run(msg, [channelid]) {
        const channel = await this.client.channels.cache.get("866266040400740372");
        let button = new MessageButton().setStyle('blurple')
            .setLabel('Open')
            .setID(`crate`)


        const embed = this.client
            .embed()

            .setImage('https://i.pinimg.com/originals/d2/40/7d/d2407df59b5adf9ac9a4b22547b281d2.gif')

        let row = new MessageActionRow().addComponents(button)
        await channel.send('', { embed: embed })



        return await channel.send(`Click to buy crate for **${toFancyNum(500000)}** <:dabs:851218687255773194> dabs`, row);

    }
}

module.exports = BanApplication;
