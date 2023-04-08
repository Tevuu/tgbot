const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("6174018135:AAGqsSq2kf2JTh9HBaMv6NlmPMuzvFd4Ip8");
bot.start((ctx) =>
  ctx.reply(
    "Я бебиджоник, маленький герой сказки Владика, я родился в деревне валорантнеочень. Там я вырос и стал самым сильным бебиджоником бибизьяной. Меня создал папа Vlad"
  )
);
bot.help((ctx) => ctx.reply("Не будет тебе помощи, нубик"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍 **йня"));
bot.hears("hi", (ctx) => ctx.reply("Ну привет"));
bot.command("admins", (ctx) =>
  ctx.replyWithHTML(
    "<b>Я же сказал уже, что меня сделал Vladislav Smirnov из секретной группы бибизьян!</b>"
  )
);
bot.launch();
ъ;
