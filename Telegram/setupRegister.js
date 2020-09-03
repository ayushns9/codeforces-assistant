/*
* Funtion to handle user registerations.
*/
const { WelcomeText } = require('./Texts')
const { AddUser } = require('../database/AddUser')

function setupRegister(bot, pool) {
    bot.hears(/^(?!yes)\w*$/gm, async ctx => {
        console.log('register');
        if(ctx.message.reply_to_message) {
            if(ctx.message.reply_to_message.text == WelcomeText) {
                try {
                    await AddUser(pool, ctx.message.from.id, ctx.message.text)
                    return ctx.reply("User added!")
                } 
                catch (err) {
                    console.log(err)
                    return ctx.reply("Unable to add user!")
                }
            }
        }
        else {
            return 0;
        }
    })
}


module.exports = {
    setupRegister
}