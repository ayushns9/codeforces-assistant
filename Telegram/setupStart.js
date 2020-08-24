/* 
*Function to handle the \start command for the bot.
*/
function setupStart(bot) {
    bot.start((ctx) => {
        // Reply with a welcome message
        ctx.reply('Hi! I am codeforces assistant and currently support 1v1 lockout matches. Please reply with your codeforces handle for me to register you!');
    })
}

// Exports
module.exports = {
    setupStart
}
