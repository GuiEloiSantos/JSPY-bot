let express = require('express');
let app = express();
app.set('env', process.env.ENV);


const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken:  process.env.ACCES_TOKEN,
    verifyToken:  process.env.VERIFY_TOKEN,
    appSecret:  process.env.APP_SECRET
});
bot.on('message', (payload, chat) => {
    const text = payload.message.text;
chat.say(`Echo: ${text}`);
});

bot.start();
module.exports = app;
