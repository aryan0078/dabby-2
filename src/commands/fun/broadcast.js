const Command = require("../../structures/Command.js");
const { replyError } = require("../../utils/constants.js");

class Broadcast extends Command {
  constructor(...args) {
    super(...args, {
      description: "Enable/Disable broadcast",
      aliases: ["broadcast", "bc"],
      botPermissions: ["MANAGE_WEBHOOKS"],
      userPermissions: ["ADMINISTRATOR"],
      usage: "bc",
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
        `Please whitelist bot from other bots because this feature use following features\n1.Webhooks\n2.Embedlinks(server invite link will be removed)`
      );
      const webhook = await msg.channel.createWebhook(user.username);
      const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
      await ch.insertOne({
        id: msg.channel.id,
        broadcast: true,
        webhook: webhook.url,
      });
      return msg.send(
        "Messages from this channel will be broadcasted globally"
      );
    }
    if (!check.global) {
      let user = await this.verifyUser(msg, msg.author);
      user.send(
        `Please whitelist bot from other bots because this feature use following features\n1.Webhooks\n2.Embedlinks(server invite link will be removed)`
      );
      const webhook = await msg.channel.createWebhook(user.username);
      const avatar = user.displayAvatarURL({ format: "png", size: 2048 });
      await ch.findOneAndUpdate(
        { id: msg.channel.id },
        { $set: { broadcast: true, webhook: webhook.url } }
      );
      return msg.send(
        "Messages from this channel will be broadcasted globally"
      );
    } else {
      await ch.findOneAndUpdate(
        { id: msg.channel.id },
        { $set: { broadcast: false } }
      );
      return msg.send("Broadcast disabled");
    }
  }
}

module.exports = Broadcast;
