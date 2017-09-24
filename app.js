let express = require('express');
let app = express();
let config = require('config');


const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: config.get('ACCES_TOKEN'),
    verifyToken: config.get('VERIFY_TOKEN'),
    appSecret: config.get('APP_SECRET')
});
bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    chat.say(`Echo: ${text}`);
});

bot.start();
module.exports = app;
