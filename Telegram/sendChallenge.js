/*
* function to take the opponent
* and send him/her the challenge
*/

const { challengeHandler } = require('./challengeHandler');

async function sendChallenge(bot, challenger_id, opponent_id, challenger_handle,opponent_handle ,rating, matchId, pool) {
    bot.telegram.sendMessage(opponent_id, `${challenger_handle} Challenged you for a ${rating} lockout match.\n Reply with a yes to accept and no to decline.`);
    await challengeHandler(bot, matchId, pool, opponent_id, challenger_id, rating, challenger_handle, opponent_handle);
}

//exports
module.exports = {
    sendChallenge
}