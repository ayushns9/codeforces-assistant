const RandomProblem = require('./../codeforces/RandomProblem.js')

module.exports = {
    StartMatch : async function (user1, user2, handle1, handle2, rating) {
        // Update the state of match on db

        return await RandomProblem.RandomProblem(rating, handle1, handle2);
    }
}