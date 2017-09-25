const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: 'EAAWXRVTfdHwBAFJKrnHQ313fFHKRzrcF0BUieSL8MholU2EykboibHbDNXglThXVv2X1gZB2O1Sc7wdm5dcMtBjdGKoVFYU0YyCIcly0oDkyYfRfN4NkACqZBwmmczor3mnXcsmLbZASm9oBfpkL3idSSyVnwZCWg1HsXpk72gZDZD',
    verifyToken: '784df74df75bda0307b6c878380e6359',
    appSecret: '8397aa990919058966cf1049b13957c5'
});
bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    chat.say(`Echo: ${text}`);
});

bot.start(80);
