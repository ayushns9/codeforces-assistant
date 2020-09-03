/*
* function to handle yes/no 
* response to a challenge
*/

const { setMatchRunning } = require("../database/setMatchRunning");
const { deleteMatch } = require("../database/deleteMatch");
const { conductMatch } = require('./../codeforces/conductMatch');
const { RandomProblem } = require('../codeforces/RandomProblem');


async function challengeHandler(bot, matchId, pool, opponent_id, challenger_id, rating, challenger_handle, opponent_handle) {
    bot.hears('yes', async ctx => {
        if(ctx.from.id == opponent_id) {
            try {
                await setMatchRunning(pool, matchId);
                problem = await RandomProblem(rating, challenger_handle, opponent_handle);
                console.log(problem);
                bot.telegram.sendMessage(opponent_id, `Challenge started\n${problem}\nGood luck and have fun!`);
                bot.telegram.sendMessage(challenger_id, `Challenge started\n${problem}\nGood luck and have fun!`);
                var contestId = problem.match(/\d+/)[0];
                var problemIndex = problem.charAt(problem.length - 1);
                var result = await conductMatch(challenger_handle, opponent_handle, contestId, problemIndex);
                if(result == 1) {
                    ctx.telegram.sendMessage(challenger_id, 'Congratulations! You won.');
                    ctx.telegram.sendMessage(opponent_id, 'Tough luck! You lost.');
                    await deleteMatch(pool, matchId);
                } else if(result == 2) {
                    ctx.telegram.sendMessage(opponent_id, 'Congratulations! You won.');
                    ctx.telegram.sendMessage(challenger_id, 'Tough luck! You lost.');
                    await deleteMatch(pool, matchId);
                } else {
                    ctx.telegram.sendMessage(challenger_id, 'It was a draw. Try again');
                    ctx.telegram.sendMessage(opponent_id, 'It was a draw. Try again');
                    await deleteMatch(pool, matchId);
                }

                
            } catch (err) {
                console.log(err);
            }
            return true;
        }
    });
    bot.hears('no', async ctx => {
        if(ctx.from.id == opponent_id) {
            await deleteMatch(pool, matchId);
            return false;
        }
    });

}

//exports
module.exports = {
    challengeHandler
}