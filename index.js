const { bot }  = require('./init/bot');
const { setupStart } = require('./Telegram/setupStart');
const { setupChallengeInvite } = require('./Telegram/setupChallengeInvite')
const { setupChallenge } = require('./Telegram/setupChallenge')
const { setupRegister } = require('./Telegram/setupRegister');
const { pool } = require('./init/db');
const {conductMatch} = require('./codeforces/conductMatch');

//Setup bot commands
setupStart(bot);
setupRegister(bot, pool);
setupChallengeInvite(bot);
setupChallenge(bot, pool);

//launch the bot
bot.launch()