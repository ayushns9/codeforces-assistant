const { bot }  = require('./init/bot');
const { setupStart } = require('./Telegram/setupStart');
const { setupChallengeInvite } = require('./Telegram/setupChallengeInvite')
const { setupChallenge } = require('./Telegram/setupChallenge')
const { setupRegister } = require('./Telegram/setupRegister');
const { pool } = require('./init/db');
const {conductMatch} = require('./codeforces/conductMatch');

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://codeforces-assistant-telegram.herokuapp.com/';


bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);

//Setup bot commands
setupStart(bot);
setupRegister(bot, pool);
setupChallengeInvite(bot);
setupChallenge(bot, pool);

//launch the bot
bot.launch()