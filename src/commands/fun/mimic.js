const Command = require("../../structures/Command.js");
const { replyError } = require("../../utils/constants.js");

class Mimic extends Command {
  constructor(...args) {
    super(...args, {
      description: "Copy someone and talk as them.",
      aliases: ["copycat"],
      botPermissions: ["MANAGE_WEBHOOKS"],
      usage: "mimic <@user> <msg...>",
      guildOnly: true,
    });
  }

  async run(msg, [user, ...message]) {
    user = await this.verifyUser(msg, user);
 let db = this.client.dbClient;
    db = await db.db();
    let ch = db.collection('channels')
    let check = await ch.findOne({ id: msg.channel.id })
    if (!check||!check.mimic) {
      return replyError(msg,'Mimic command is disabled by default\nuse `dab enable mimic` to enable',5000)
    }
    if (!message) {
      return replyError(msg, `Please enter some message`, 5000)
    }
    if (!message||message==undefined||message==''||message==" ") {
      return replyError(msg, "Cannot send empty message", 5000);
    }
    if (msg.deletable) await msg.delete();
    
    const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
    const webhook = await msg.channel.createWebhook(user.username, { avatar });

    await webhook.send(message.join(" ").replace(/@(everyone|here)/g, "@\u200b$1"));
    await webhook.delete();
  }
}

module.exports = Mimic;
