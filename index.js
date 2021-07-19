/**
 * Entry file.
 * Try to keep this file minimum and abstract most of the functionality in seperate files.
 *
 * @author Raven
 * @license MIT
 */

// Load .env
require("dotenv").config();
const random = require("random-number-csprng");
// Setup Module Alias.
const moduleAlias = require("module-alias");
const { paydab, getdabbal, givedabs, addCrate } = require("./src/structures/database.js");
const express = require("express");
/* onst app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
); */
moduleAlias.addAliases({
  "@utils": __dirname + "/src/utils",
  "@structures": __dirname + "/src/structures",
  "@json": __dirname + "/assets/json",
  "@languages": __dirname + "/src/languages",
});

// Load discord.js extensions.
require("./src/extensions/GuildMember.js");
require("./src/extensions/TextChannel.js");
require("./src/extensions/DMChannel.js");
require("./src/extensions/Message.js");
require("./src/extensions/Guild.js");
require("./src/extensions/User.js");
var cluster = require('cluster');
const { MessageEmbed } = require("discord.js");
if (cluster.isMaster) {
  cluster.fork();

  cluster.on('exit', function (worker, code, signal) {
    cluster.fork();
  });
}

if (cluster.isWorker) {
  // put your code here

  // Import the Client.
  const MiyakoClient = require("./src/structures/MiyakoClient.js");
  const { toFancyNum, replyError } = require("./src/utils/constants.js");

  // Login. (And start in development mode if --dev is passed)
  let d = new MiyakoClient(process.argv.includes("--dev"));
  d.login();


  require("discord-buttons")(d);
  d.on("clickButton", async (button) => {
    let l = d.dbClient;
    l = l.db();
    let args = button.id;

    if (args == "crate") {
      let u = args.split(":");

      let cost = 500000

      const channel = await d.channels.cache.get("866266040400740372");
      await button.clicker.fetch()
      let user = await getdabbal(button.clicker.user.id, l)
      let balance = await getdabbal(button.clicker.user.id, l);
      if (!user.gender) {
        return replyError(channel, `<@${button.clicker.user.id}> please set your gender \nby \`dab sg\``, 8000)
      }
      if (balance.points < cost) {
        return replyError(channel, `<@${button.clicker.user.id}> you dont have enough <:dabs:851218687255773194> dabs to open crate\nRequired cost is **${toFancyNum(cost)}** <:dabs:851218687255773194> dabs`, 10000)
      } else {
        await givedabs(button.clicker.user.id, -cost, l);
        let randometicket

        if (user.gender == 'male') {
          randometicket = Math.floor(Math.random() * 50 / 2) * 2;
        } else if (user.gender == "female") {
          randometicket = Math.floor(Math.random() * 50 / 2) * 2;
          randometicket += 1
        }
        await addCrate(button.clicker.user.id, ticketid, l);
        /* let embed = new MessageEmbed().setImage('https://cdn.discordapp.com/attachments/848414662587973653/865751936060882954/3.png') */
        return replyError(channel, `<@${button.clicker.user.id}> you have recived **1** <a:crate:866403905760133158> for **${toFancyNum(cost)}** <:dabs:851218687255773194> dabs`, 10000)

      }
    }
    if (args.startsWith("accept")) {
      let u = args.split(":");
      let balance = await getdabbal(button.clicker.user.id, l);
      let result = balance.points;
      if (result < parseInt(u[2])) {
        return button.message.send(
          `You don't have enough <:dabs:851218687255773194> dabs to pay fill your wallet and then pay`
        );
      } else {
        await paydab(button.clicker.user.id, u[3], parseInt(u[2]), "DM", l);
        button.message.send(
          `Sent **${toFancyNum(
            parseInt(u[2])
          )}** <:dabs:851218687255773194> dabs to **${u[3]}** `
        );
        button.message.delete();
        try {
          let user = await d.users.fetch(u[3]);
          user.send(
            `**${user.username} |** Payment Accepted from ${button.clicker.user.username
            } of **${toFancyNum(
              parseInt(u[2])
            )}** <:dabs:851218687255773194> dabs you recived the amount is wallet!`
          );
        } catch (e) {
          console.log("");
        }
        await button.defer();
      }
    }
    if (args.startsWith("reject")) {
      let u = args.split(":");

        button.message.send(
          `Payment rejected of **${toFancyNum(
            parseInt(u[2])
          )}** <:dabs:851218687255773194> dabs to **<@${u[3]}>** `
        );
        button.message.delete();
        try {
          let user = await d.users.fetch(u[3]);
          user.send(
            `**${user.username} |** Payment Rejected from ${button.clicker.user.username
            } of **${toFancyNum(parseInt(u[2]))}** <:dabs:851218687255773194> dabs`
          );
        } catch (e) {
          console.log("");
        }
        await button.defer();
      }
   
    });

}