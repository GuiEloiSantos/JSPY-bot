let express = require('express');

let app = express();


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


module.exports = app;
