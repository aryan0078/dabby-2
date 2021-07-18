const Command = require("../../structures/Command.js");
const { replyError, toFancyNum } = require("../../utils/constants.js");
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
class TransactionLogs extends Command {
    constructor(...args) {
        super(...args, {
            description: "This command is only for workers",
            aliases: ["tl"],
            usage: "tl <@user>",
            guildOnly: true,
            cooldown:30
        });
    }

    async run(msg, [user]) {
        if (msg.channel.id == "866214211579019294") {
            user = await this.verifyUser(msg, user);
            let author = await this.verifyMember(msg, msg.author)
            let db = this.client.dbClient;
            db = await db.db();
            let logs = db.collection('transations')
            let l = await logs.find({ by: `${user.id}` }).sort({ at: -1 }).limit(15).toArray();
            let str = `Transactions logs of ${user.username}\n`
            l.forEach(async (lo, index) => {

                let u = await this.client.users.fetch(lo.to)
                str += `**${user.username}** has transferred **${toFancyNum(lo.amount)}** <:dabs:851218687255773194> dabs to **${u.username}** at ${new Date(lo.at).toDateString()}\n`
                if (index == l.length - 1) {
                    return msg.send('Logs').then(async (m) => { await msg.channel.send(str); m.react('👍') })
                }
            });

        } else {
            if (await this.workercheck(msg) || await this.globalpartnercheck(msg) || await this.guidercheck(msg)) {


                user = await this.verifyUser(msg, user);
                let author = await this.verifyMember(msg, msg.author)
                let db = this.client.dbClient;
                db = await db.db();
                let logs = db.collection('transations')
                let l = await logs.find({ by: `${user.id}` }).sort({ at: -1 }).limit(12).toArray();
                let str = `Transactions logs of ${user.username}\n`
                l.forEach(async (lo, index) => {
                    if (index > 10) {
                        return msg.send('Check DM for logs').then(async (m) => { await author.send(str); m.react('👍') })
                    }
                    let u = await this.client.users.fetch(lo.to)
                    str += `**${user.username}** has transferred **${toFancyNum(lo.amount)}** <:dabs:851218687255773194> dabs to **${u.username}** at ${new Date(lo.at)}\n`
                });


                // return author.send(str)

            } else {
                return replyError(msg, 'This command is only for workers,guiders,global partners', 5000)
            }
        }
    }
}

module.exports = TransactionLogs;
