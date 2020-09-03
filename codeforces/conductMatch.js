/*
* Function which checks after every minute if one of
* the players have solved the problem.
*/

const { CheckSolved } = require("./CheckSolved");

async function conductMatch (handle1, handle2, constestId, problemIndex) {
    // var winner = -1;
    var attempts = 0;
    const result = async (resolve, reject) => {
        attempts++;
        var winner = -1;
        await CheckSolved(handle1, constestId, problemIndex).then(
            async solve1 => {
                await CheckSolved(handle2, constestId, problemIndex).then(
                    solve2 => {
                        if(solve1.solved && sovle2.solved) {
                            if(solve1.time < solve2.time) {
                                winner =  1;
                            } else if(solve1.time > solve2.time) {
                                winner =  2;
                            } else {
                                winner =  3;
                            }
                        } else if(solve1.solved) {
                            winnner =  1;
                        } else if(solve2.solved) {
                            winner =  2;
                        }
                    }
                )
            }
        );
        console.log(1);
        if(winner != -1) {
            return resolve(winner);
        } else if(attempts == 200) {
            return resolve(3);
        } else {
            setTimeout(result, 1 * 1000, resolve, reject);
        }
    };
    return new Promise(result);
}

module.exports = {
    conductMatch
}