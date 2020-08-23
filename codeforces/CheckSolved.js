const fetch = require('node-fetch')

module.exports = {
    CheckSolved : async function (handle, contest, index) {
        const api_url = `https://codeforces.com/api/contest.status?contestId=${contest}&handle=${handle}`
        const response = await fetch(api_url);
        const json = await response.json();
        const allSubmissions = json.result;
        var solved = false;
        allSubmissions.forEach(submission => {
            if(submission.testset == "TESTS" && submission.verdict == "OK" && submission.problem.index == index) {
                solved = true;
            }
        });
        return solved;
    }
}