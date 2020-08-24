/* 
*Function to handle the \start command for the bot.
*/

const { WelcomeText } = require("./Texts");

function setupStart(bot) {
    bot.start((ctx) => {
        // Reply with a welcome message
        return ctx.reply(WelcomeText);
    })
}

// Exports
module.exports = {
    setupStart
}
