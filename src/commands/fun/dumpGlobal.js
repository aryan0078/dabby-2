const Command = require("../../structures/Command.js");
const { replyError } = require("../../utils/constants.js");

class DumpGlobal extends Command {
  constructor(...args) {
    super(...args, {
      description: "Dump global chats from different channels",
      aliases: ["dumpglobal", "dg"],
      botPermissions: ["MANAGE_WEBHOOKS"],
      userPermissions: ["ADMINISTRATOR"],
      usage: "dg",
      guildOnly: true,
      cooldown: 20,
    });
  }

  async run(msg) {
    let db = this.client.dbClient;
    db = await db.db();
    let ch = db.collection("channels");
    let check = await ch.findOne({ id: msg.channel.id });
    if (!check) {
      let user = await this.verifyUser(msg, msg.author);
      user.send(
        `Please whitelist bot from other bots because this feature use following things\n1.Webhooks\n2.Embedlinks(server invite link will be removed)`
      );
      const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
      const webhook = await msg.channel.createWebhook(user.username);
      await ch.insertOne({
        id: msg.channel.id,
        global: true,
        webhook: webhook.url,
      });
      return msg.send("Enabled Global chat dump.....");
    }
    if (!check.global) {
      let user = await this.verifyUser(msg, msg.author);
      user.send(
        `Please whitelist bot from other bots because this feature use following things\n1.Webhooks\n2.Embedlinks(server invite link will be removed)`
      );
      const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
      const webhook = await msg.channel.createWebhook(user.username);
      await ch.findOneAndUpdate(
        { id: msg.channel.id },
        { $set: { global: true, webhook: webhook.url } }
      );
      return msg.send("Enabled Global chat dump.....");
    } else {
      await ch.findOneAndUpdate(
        { id: msg.channel.id },
        { $set: { global: false } }
      );
      return msg.send("Disabled Global chat dump.....");
    }
  }
}

module.exports = DumpGlobal;
