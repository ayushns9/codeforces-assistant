const fetch = require('node-fetch')


async function CheckSolved (handle, contest, index) {
    const api_url = `https://codeforces.com/api/contest.status?contestId=${contest}&handle=${handle}`
    const response = await fetch(api_url);
    const json = await response.json();
    const allSubmissions = json.result;
    var solved = false;
    var time;
    allSubmissions.forEach(submission => {
        if(submission.testset == "TESTS" && submission.verdict == "OK" && submission.problem.index == index) {
            solved = true;
            time = submission.creationTimeSeconds;
        }
    });
    return {
        'solved': solved, 
        'time': time
    };
}

module.exports = {
    CheckSolved
}