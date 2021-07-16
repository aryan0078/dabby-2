const Command = require("../../structures/Command.js");
const { replyError } = require("../../utils/constants.js");
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
class TicketBattle extends Command {
    constructor(...args) {
        super(...args, {
            description: "Do ticket battel with others",
            aliases: ["tb"],
            usage: "tb <@user>",
            guildOnly: true,
        });
    }

    async run(msg, [user]) {
        user = await this.verifyUser(msg, user);
        let db = this.client.dbClient;
        db = await db.db();
        return msg.send('Coming soon..!')
    }
}

module.exports = TicketBattle;
