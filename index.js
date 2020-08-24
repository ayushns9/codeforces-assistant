const { bot }  = require('./init/bot');
const { setupStart } = require('./Telegram/setupStart');
const { setupChallengeInvite } = require('./Telegram/setupChallengeInvite')
const { setupRegister } = require('./Telegram/setupRegister');
const { pool } = require('./init/db');

//Setup bot commands
setupStart(bot);
setupRegister(bot, pool);
setupChallengeInvite(bot);


//launch the bot
bot.launch()