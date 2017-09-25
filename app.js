const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});
bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    chat.say(`Echo: ${text}`);
});
console.log(process.env);
bot.start(process.env.PORT||80);
