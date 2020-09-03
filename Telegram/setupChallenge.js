/*
* function to take the handle and rating
* and setup the lockout match.
*/
const { StartChallengeText } = require("./Texts");
const { getChat_id } = require('./../database/getChat_id');
const { AddMatch } = require("../database/AddMatch");
const { sendChallenge } = require('./sendChallenge');
const { getHandle } = require("../database/getHandle");

function setupChallenge(bot, pool) {
    console.log(22)
    bot.hears(/^\w+\s\d+$/gm, async ctx => {
        if(ctx.message.reply_to_message) {
            if(ctx.message.reply_to_message.text == StartChallengeText) {
                var messageText = ctx.message.text.split(' ');
                var handle = messageText[0];
                var rating = messageText[1];
                try {
                    var opponent = parseInt(await getChat_id(pool, handle));
                    matchId = await AddMatch(pool, ctx.from.id, opponent);
                    console.log(matchId);
                    challenger_handle = await getHandle(pool, ctx.from.id);
                    sendChallenge(bot, ctx.from.id, opponent,challenger_handle ,handle , rating, matchId, pool)
                }
                catch (err) {
                    console.log(err);
                    return ctx.reply('No user with that handle is registered.');
                }
            }
        }
        else {
            return;
        }
    });
}

//exports
module.exports = {
    setupChallenge
}