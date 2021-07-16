const Language = require("../structures/Language.js");
const constants = require("../utils/constants.js");

module.exports = new Language(
  "indonesian",
  "Bahasa Indonesia",
  {
    LANGUAGE_SET: "Bahasa telah diatur ke Bahasa Indonesia",
    GUILD_ONLY:
      "Bodoh! Kamu hanya dapat menggunakan perintah ini di dalam server. Apa yang ingin kamu lakukan dengan dm saya?",
    OWNER_ONLY:
      "Bodoh! Apa yang ingin kamu lakukan? Perintah itu hanya untuk tuanku!",
    CHANNEL_NOT_FOUND: "Aku tidak dapat menemukan channel itu.",
    ROLE_NOT_FOUND: "Role itu tidak ada.",
    MENTION_REMINDER: (prefix) =>
      `Hai! Jalankan \`${prefix}help\` untuk melihat daftar perintah yang dapat Kamu gunakan.`,
    DID_YOU_MEAN: (cmd) => `|\`❔\`| Apakah yang kamu maksud \`${cmd}\`?`,
    NONE: "Tidak ada",
    SECONDS: "Detik",
    BLACKLISTED:
      "Kamu telah masuk blacklist dari penggunaan bot karena alasan penyalahgunaan bot. Silahkan bergabung ke https://discord.gg/mDkMbEh atau menghubungi Ravener#5796 untuk mendapatkan kesempatan mengajukan permohonan.",
    BLACKLISTED_GUILD: (guild) =>
      `Server **${guild.name}** telah masuk blacklist dari penggunaan bot. Jika Kamu adalah Admin server, silakan bergabung ke https://discord.gg/mDkMbEh atau menghubungi Ravener#5796 untuk mendapatkan kesempatan mengajukan permohonan.`,

    WELCOME_MESSAGES: [
      "O-ohayou gozaimasu **{{user}}-san**.",
      "Ini bukan seperti aku menyukaimu atau apapun... tapi selamat datang di server **{{user}}**.",
      "O-oh, selamat datang **{{user}}-san**. Aku harap, Aku tidak membuatmu tidak nyaman...",
      "**{{user}}**, Sepertinya Kamu mendarat di sisi yang salah dari Discord!",
      "Hai **{{user}}**! Selamat Datang di **{{guild}}**, Aku harap Kamu betah disini!",
      "Y-yay! Lebih banyak orang untuk ditangani! Selamat datang **{{user}}**!",
      "Hai! Waifu/husbando **{{user}}** telah bergabung dengan Akademi!",
      "**{{user}}-san**, selamat datang di **{{guild}}**!",
    ],
    GOODBYE_MESSAGES: [
      "Awh, **{{user}}** telah pergi... A-aku tidak peduli! Bodoh!",
      "**{{user}}** telah pergi, begitu saja seperti kita tidak membutuhkannya atau apapun.",
      "**{{user}}** kenapa kamu meninggalkan aku di sini, sendirian!?",
      "Eep! **{{user}}** pergi?! Me-mereka selalu meninggalkanku, sialan itu...",
      "A-akhirnya..., aku kira **{{user}}** tidak akan pernah pergi dari sini!",
      "Woah! **{{user}}** meninggalkan **{{guild}}**! sialan, lalu kenapa mereka bergabung?!",
      "Woo, **{{user}}** telah pergi, sekarang aku hanya perlu menangani **{{amount}}** user!",
    ],
    LEVEL_MESSAGES: [
      "Level kamu **{{level}}**, Tidak buruk...",
      "Pfft, level **{{level}}**?",
      "**{{user}}**, Kamu menanyakan ini lagi? Masa bodoh, level kamu **{{level}}**.",
      "ini dia **{{user}}-san**, level kamu **{{level}}**.",
      "Level kamu **{{level}}**, mungkin jika kamu mau lebih aktif lagi, level kamu bisa lebih tinggi dari itu.",
      "Level **{{level}}**? Apa? kamu berharap lebih tinggi dari **{{level}}**?",
    ],
    DAILY_SUCCESS_MESSAGES: [
      "Yatta! Kamu mendapatkan **{{amount}}**.",
      "Selamat, kamu sudah redeem hadiah harian kamu. **{{amount}}**!",
      "Akhirnya, Aku kira kamu tidak akan mengklaim **{{amount}}** milik kamu hari ini!",
      "Kamu hanya mendapatkan **{{amount}}**? Aku bisa mendapatkan lebih dari itu setiap jamnya!",
      "A-apa?! Kamu mendapatkan **{{amount}}**, woah...",
      "Kamu baru saja mendapatkan **{{amount}}**? Mungkin kamu bisa membelikanku makan malam kapan-kapan **{{user}}-san**? :wink:",
      "Ya ampun, akhirnya kamu mendapatkan keberuntunganmu juga, sebanyak **{{amount}}**. kamu hanya perlu bersabar, sekarang berikan aku Pocky.",
    ],
    PING_MESSAGES: [
      "Ugh, lagi? Kamu selalu bertanya, dan aku selalu memberi tahu kamu bahwa aku merespon **{{ms}}ms**.",
      "I-ini dia, Aku merespon **{{ms}}ms**.",
      "**{{user}}**? aku telah merespon **{{ms}}ms**.",
      "**{{user}}**! Kamu sudah menyia-nyiakan **{{ms}}ms** waktuku, ERGH",
      "**{{user}}**, ya aku di sini, dan aku membutuhkan **{{ms}}ms** untuk merespon!",
      "**{{user}}** kenapa kamu ping aku! Kamu sudah menyia-nyiakan **{{ms}}ms** waktuku!!",
      "hey **{{user}}**, itu membutuhkan **{{ms}}ms** untuk mengirim pesan ini",
      "Kamu sudah membuat aku **{{ms}}ms** lebih tua - hanya karena bertanya.",
      "Tahukah Kamu berapa lama waktu yang aku butuhkan untuk membaca pesan itu? Kamu cukup banyak membuang **{{ms}}ms** hariku!",
    ],
    RELOAD_ERR_UNLOAD: [
      "**{{user}}-san**, Aku pikir Aku merusaknya... Ini yang terjadi: **{{response}}**",
    ],
    RELOAD_NOT_FOUND: [
      "Eeeh?! **{{user}}-san**, kenapa Kamu meminta aku untuk menemukan perintah yang tidak ada, bahkan itu bukan alias/singkatan.",
    ],
    RELOAD_MISSING_ARG: [
      "A-apa?! Aku tidak tahu harus berbuat apa, karena kamu tidak memberitahuku apa yang harus dilakukan!",
    ],
    LEVELUP_MESSAGES: [
      "Kamu telah menjadi level **{{level}}**, dasar tukang farming!",
      "E-eh? Kamu sudah naik level? well, jangan karena kamu sudah level **{{level}}** sekarang, bukan berarti aku akan lebih menyukaimu **{{user}}**... bodoh.",
      "Hmph, Kamu telah naik level **{{level}}**, **{{user}}-san**. W-well, tidak ada bedanya bagiku!",
      "Hyaa~! Kamu telah naik level**{{user}}-san**, level kamu sekarang **{{level}}**.",
      "**{{user}}-san**, jangan lupakan aku! Hanya karena kamu sudah level **{{level}}**",
      "Wah gila, **{{user}}** semakin pintar sekarang dengan I.Q. **{{level}}**",
      "A-apa? Kamu sudah mencapai level **{{level}}** cepat sekali...",
    ],

    // Categories.
    CATEGORY_GENERAL: "Umum",
    CATEGORY_CONFIG: "Config",
    CATEGORY_ANIME: "Anime",
    CATEGORY_NSFW: "NSFW",
    CATEGORY_OWNER: "Pemilik",
    CATEGORY_FUN: "Hiburan",
    CATEGORY_UTILITY: "Utilitas",
    CATEGORY_IMAGES: "Gambar",
    CATEGORY_ANIMALS: "Hewan",
    CATEGORY_MODERATION: "Moderasi",
    CATEGORY_SOCIAL: "Sosial",
    CATEGORY_PROGRAMMING: "Pemrograman",
    CATEGORY_MISC: "Miscellaneous",
    CATEGORY_REACTIONS: "Reactions",

    COMMAND_STATS_DESCRIPTION:
      "Hai, Saya Miyako. Bot hiburan all-in-one untuk server Kamu. dipersembahkan oleh tuanku Ravener#5796",
    COMMAND_STATS_TITLE: "Miyako - Statistik Bot",
    COMMAND_STATS_FIELD: "Bot Stats",
    COMMAND_CHOOSE: (choice) => `aku pikir ${choice}`,
    COMMAND_CHOOSE_THINKING: (user) =>
      `${constants.typing} **${user}** sedang berpikir...`,
    COMMAND_8BALL_ASK: "Bodoh! Apa yang ingin kamu tanyakan?",
    COMMAND_PROFILE_LEVEL: "Level",
    COMMAND_PROFILE_POINTS: "Poin",
    COMMAND_PROFILE_REP: "Poin Reputasi",
    COMMAND_PROFILE_TITLE: (name) => `Profil ${name}`,
    COMMAND_CAT_TITLE: "Kucing Random",
    COMMAND_DOG_TITLE: "Anjing Random",
    COMMAND_FOX_TITLE: "Rubah Random",
    COMMAND_MYID: (user) => `${user} ID User Kamu adalah: **${user.id}**`,
    COMMAND_KICK_BOT: "Bodoh! Kenapa kamu ingin mengeluarkan saya?",
    COMMAND_KICK_SELF:
      "Bodoh! Kenapa kamu ingin mengeluarkan diri kamu sendiri?",
    COMMAND_KICK_OWNER: "Bodoh! Kamu tidak dapat mengeluarkan pemilik.",
    COMMAND_KICK_USER_CANNOT: "Kamu tidak dapat mengeluarkan user ini.",
    COMMAND_KICK_BOT_CANNOT: "Aku tidak bisa mengeluarkan user ini.",
    COMMAND_HELP_TITLE: "Perintah - Bantuan",
    COMMAND_LANGUAGE_SELECT: "Silahkan pilih bahasa.",
    COMMAND_SAY: "Saya akan mengucapkan apa pun yang Kamu ingin saya lakukan.",
    COMMAND_SAY_WHAT: "Bodoh! Apa yang kamu ingin saya ucapkan?",
    COMMAND_HELP_FOR: (cmd) => `Bantuan untuk perintah ${cmd}`,
    COMMAND_EVAL_ERROR: (err) =>
      `Terjadi kesalahan berikut: \`\`\`js\n${err.stack || err}\`\`\``,
    COMMAND_EVAL_TOKEN: "[TOKEN]",
    COMMAND_ANNOUNCEMENTS_TITLE: "Bot Pengumuman!",
    COMMAND_ANNOUNCEMENTS_FOOTER: (prefix) =>
      `Dari Miyako Lounge (Gunakan ${prefix}support untuk bergabung dengan kami)`,
    COMMAND_SUPPORT_DESCRIPTION: "Dapatkan tautan ke server support kami.",
    COMMAND_SUPPORT_TITLE: "Bergabunglah dengan Miyako Lounge",
    COMMAND_POKEMON_GUESS:
      "Kamu memiliki waktu 15 detik untuk menebak! Siapakah Pokèmon itu?",
    COMMAND_SLOTS_TITLE: "Miyako Slots",
    COMMAND_SLOTS_WIN: (points) => `Selamat! Kamu menang **${points}**`,
    COMMAND_OWO: "OwO! Apa ini?",
    COMMAND_HELP_DESCRIPTION: "Deskripsi",
    COMMAND_HELP_CATEGORY: "Kategori",
    COMMAND_AVATAR_TITLE: (user) => `avatar ${user}`,
    COMMAND_LYRICS_WHAT: "Bodoh! Lagu apa yang kamu cari?",
    COMMAND_SERVERICON_TITLE: (guild) => `icon ${guild}`,
    COMMAND_BLACKLIST_USER_BLACKLIST: (user) =>
      `User yang masuk blacklist **${user.tag}** (${user.id})`,
    COMMAND_BLACKLIST_USER_UNBLACKLIST: (user) =>
      `User yang di cabut dari blacklist **${user.tag}** (${user.id})`,
    COMMAND_BLACKLIST_GUILD_BLACKLIST: (guild) =>
      `Server yang masuk blacklist **${guild.name}** (${guild.id})`,
    COMMAND_BLACKLIST_GUILD_UNBLACKLIST: (guild) =>
      `Server yang di cabut dari blacklist **${guild.name}** (${guild.id})`,

    // NSFW Commands
    COMMAND_HENTAI: "Hentai",
    COMMAND_BOOBS: "Hentai Boobs",
    COMMAND_PUSSY: "Hentai Pussy",
  },
  require("./english.js")
);
