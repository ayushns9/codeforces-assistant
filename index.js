const { bot }  = require('./init/bot');
const { setupStart } = require('./Telegram/setupStart');
const { setupChallengeInvite } = require('./Telegram/setupChallengeInvite')

setupStart(bot);
setupChallengeInvite(bot);

