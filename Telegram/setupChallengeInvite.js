/* 
* Function to handle request
* for a new challenge
*/

const {StartChallengeText} = require('./Texts')

function setupChallengeInvite(bot) {
    // reply with the initiate challenge message
    bot.command('challenge', ctx => {
        return ctx.reply(StartChallengeText)
    });
}

// exports
module.exports = {
    setupChallengeInvite
}