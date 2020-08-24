/* 
*Function to handle request
*for a new challenge
*/

function setupChallengeInvite(bot) {
    bot.command('challenge', ctx => {
        ctx.reply('Initiating a new challenge for you! \n Username of opponent?')
    });
}


// exports
module.exports = {
    setupChallengeInvite
}