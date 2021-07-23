const Command = require("../../structures/Command.js");
const { replyError, toFancyNum } = require("../../utils/constants.js");
const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
class TransactionLogs extends Command {
  constructor(...args) {
    super(...args, {
      description: "This command is only for workers",
      aliases: ["tl"],
      usage: "tl <@user>",
      guildOnly: true,
      cooldown: 30,
    });
  }

  async run(msg, [user, date]) {
    if (msg.channel.id == "866214211579019294") {
      user = await this.verifyUser(msg, user);
      let author = await this.verifyMember(msg, msg.author);
      let db = this.client.dbClient;
      db = await db.db();
      let logs = db.collection("transations");
      let l;

      if (date) {
        if (!parseInt(date) || date > 30 || date < 0) {
          return replyError(msg, "Please input proper format of date", 5000);
        }
        let temd = new Date();
        temd.setDate(date);

        l = await logs
          .find({ by: `${user.id}`, at: temd })
          .sort({ at: -1 })
          .limit(15)
          .toArray();
      } else {
        l = await logs
          .find({ by: `${user.id}` })
          .sort({ at: -1 })
          .toArray();
      }

      let str = `Transactions logs of ${user.username} if your logs are too much it wont show in this case input specific date\n`;
      for (let index = 0; index < l.length; index++) {
        const lo = l[index];
        let u = await this.client.users.fetch(lo.to);
        str += `**${user.username}** | **${toFancyNum(
          lo.amount
        )}** <:dabs:851218687255773194> to **${u.username}** at ${new Date(
          lo.at
        ).toDateString()}\n`;
        if (index > 10) {
          break;
        }
      }
      return msg.send("Logs").then(async (m) => {
        await msg.channel.send(str);
        m.react("👍");
      });
    } else {
      if (
        (await this.workercheck(msg)) ||
        (await this.globalpartnercheck(msg)) ||
        (await this.guidercheck(msg))
      ) {
        user = await this.verifyUser(msg, user);
        let author = await this.verifyMember(msg, msg.author);
        let db = this.client.dbClient;
        db = await db.db();
        let logs = db.collection("transations");
        let l = await logs
          .find({ by: `${user.id}` })
          .sort({ at: -1 })
          .limit(7)
          .toArray();
        let str = `Transactions logs of ${user.username}\n`;

        /*    l.forEach(async (lo, index) => {
                    if (index > 5) {
                        return msg.send('Check DM for logs').then(async (m) => { await author.send(str); m.react('👍') })
                    }
                    let u = await this.client.users.fetch(lo.to)
                    str += `**${user.username}** has transferred **${toFancyNum(lo.amount)}** <:dabs:851218687255773194> dabs to **${u.username}** at ${new Date(lo.at)}\n`
                }); */
        for (let index = 0; index < l.length; index++) {
          const lo = l[index];
          let u = await this.client.users.fetch(lo.to);
          str += `**${user.username}** | **${toFancyNum(
            lo.amount
          )}** <:dabs:851218687255773194> to **${u.username}** at ${new Date(
            lo.at
          ).toDateString()}\n`;
          if (index > 10) {
            break;
          }
        }
        return msg.send("Logs").then(async (m) => {
          await msg.channel.send(str);
          m.react("👍");
        });

        // return author.send(str)
      } else {
        return replyError(
          msg,
          "This command is only for workers,guiders,global partners",
          5000
        );
      }
    }
  }
}

module.exports = TransactionLogs;
