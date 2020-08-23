const { Telegraf } = require('telegraf');
const StartMatch = require('./Telegram/StartMatch.js');

const bot = new Telegraf(process.env.BOT_TOKEN)
var ayush = "699996472"
var meenu = "1180502528"
bot.start((ctx) => {
    ctx.telegram.sendMessage(meenu, "Ayush Challenged you for....");
})
bot.hears('yes', async (ctx) => {
    link = await StartMatch.StartMatch(ayush, meenu, 'starflux', 'zyrch', 1900);
    ctx.reply(`Match started! Good luck and have fun.\n Link to problem: ${link}`);
});
bot.launch()
