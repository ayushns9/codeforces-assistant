const fetch = require('node-fetch')
const CheckSolved = require('./CheckSolved')

async function RandomProblem(rating, user1, user2) {
    const api_url = "https://codeforces.com/api/problemset.problems"
    const response = await fetch(api_url);
    const json = await response.json();
    const totalProblems = json.result.problems.length;
    problems = []
    json.result.problems.forEach( problem => {
        if(problem.rating == rating) {
            problems.push(problem);
        }
    });
    var RandomIndex = (Math.floor(Math.random() * 1000000000))%problems.length;
    var choosen_problem = problems[RandomIndex];
    do {
        RandomIndex = (Math.floor(Math.random() * 1000000000))%problems.length;
        choosen_problem = problems[RandomIndex];
    }while(await CheckSolved(user1, choosen_problem.contestId, choosen_problem.index) || await CheckSolved(user2, choosen_problem.contestId, choosen_problem.index));
    var problem_link = `https://codeforces.com/problemset/problem/${choosen_problem.contestId}/${choosen_problem.index}`
    return "" + problem_link;
}

module.exports = {
    RandomProblem
}