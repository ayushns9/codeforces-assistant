/*
* Funtion to handle user registerations.
*/
const { WelcomeText } = require('./Texts')
const { AddUser } = require('../database/AddUser')

function setupRegister(bot, pool) {
    bot.on('text', async ctx => {
        if(ctx.message.reply_to_message.text == WelcomeText) {
            try {
                await AddUser(pool, ctx.message.from.id, ctx.message.text)
                ctx.reply("User added!")
            } 
            catch (err) {
                console.log(err)
                ctx.reply("Unable to add user!")
            }
        }
    })
}


module.exports = {
    setupRegister
}