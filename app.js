const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.setGreetingText("Olá meu nome é Mate, precisa de mais informações sobre pratos e o Mon Del? Tenho todo o Menu com fotos e detalhes, assim como promoções exclusivas, quer dar uma olhada?");
bot.setGetStartedButton((payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Oi, ${user.first_name}. Será um prazer atender você! Aqui está as opções em que posso te ajudar:`).then(
            chat.sendListTemplate([
                    {
                        title: "Classic T-Shirt Collection",
                        subtitle: "See all our colors",
                        image_url: "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                        buttons: [
                            {
                                title: "View",
                                type: "web_url",
                                url: "https://peterssendreceiveapp.ngrok.io/collection",
                                messenger_extensions: true,
                                webview_height_ratio: "tall",
                                fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                            }
                        ]
                    },
                    {
                        title: "Classic White T-Shirt",
                        subtitle: "See all our colors",
                        default_action: {
                            type: "web_url",
                            url: "https://peterssendreceiveapp.ngrok.io/view?item=100",
                            messenger_extensions: true,
                            webview_height_ratio: "tall",
                            fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                        }
                    },
                    {
                        title: "Classic Blue T-Shirt",
                        image_url: "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                        subtitle: "100% Cotton, 200% Comfortable",
                        default_action: {
                            type: "web_url",
                            url: "https://peterssendreceiveapp.ngrok.io/view?item=101",
                            messenger_extensions: true,
                            webview_height_ratio: "tall",
                            fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                        },

                    }
                ],
                [{
                    title: "Shop Now",
                    type: "web_url",
                    url: "https://peterssendreceiveapp.ngrok.io/shop?item=101",
                    messenger_extensions: true,
                    webview_height_ratio: "tall",
                    fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                }]
            )
        );

    });
});
bot.setPersistentMenu([
    {
        title: 'Ver Pratos',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Entradas',
                type: 'postback',
                payload: 'FIRST'
            },
            {
                title: 'Prato Principal',
                type: 'postback',
                payload: 'MAIN'
            },
            {
                title: 'Sobremesa',
                type: 'postback',
                payload: 'DESERT'
            }
        ]
    },
    {
        title: 'Bebidas',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Sem Álcool',
                type: 'postback',
                payload: 'N_ALC'
            },
            {
                title: 'Alcoólicas',
                type: 'postback',
                payload: 'ALC'
            },
            {
                title: 'Vinhos',
                type: 'postback',
                payload: 'WINE'
            }
        ]
    },
    {
        title: 'Outros',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Fazer reserva',
                type: 'postback',
                payload: 'BOOKING'
            },
            {
                title: 'Deixar Feedback',
                type: 'postback',
                payload: 'FEEDBACK'
            },
            {
                title: 'Promoções',
                type: 'postback',
                payload: 'Promoções'
            }
        ]
    }
]);
bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    console.log(payload);
    chat.say(`Echo: ${text}`);
});
bot.on('postback:START', (payload, chat) => {
        chat.getUserProfile().then((user) => {
            chat.say(`Oi, ${user.first_name}. Será um prazer atender você! Aqui está as opções em que posso te ajudar:`);
            chat.sendListTemplate([
                    {
                        title: "Classic T-Shirt Collection",
                        subtitle: "See all our colors",
                        image_url: "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                        buttons: [
                            {
                                title: "View",
                                type: "web_url",
                                url: "https://peterssendreceiveapp.ngrok.io/collection",
                                messenger_extensions: true,
                                webview_height_ratio: "tall",
                                fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                            }
                        ]
                    },
                    {
                        title: "Classic White T-Shirt",
                        subtitle: "See all our colors",
                        default_action: {
                            type: "web_url",
                            url: "https://peterssendreceiveapp.ngrok.io/view?item=100",
                            messenger_extensions: true,
                            webview_height_ratio: "tall",
                            fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                        }
                    },
                    {
                        title: "Classic Blue T-Shirt",
                        image_url: "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                        subtitle: "100% Cotton, 200% Comfortable",
                        default_action: {
                            type: "web_url",
                            url: "https://peterssendreceiveapp.ngrok.io/view?item=101",
                            messenger_extensions: true,
                            webview_height_ratio: "tall",
                            fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                        },

                    }
                ],
                [{
                    buttons: [
                        {
                            title: "Shop Now",
                            type: "web_url",
                            url: "https://peterssendreceiveapp.ngrok.io/shop?item=101",
                            messenger_extensions: true,
                            webview_height_ratio: "tall",
                            fallback_url: "https://peterssendreceiveapp.ngrok.io/"
                        }
                    ]
                }]
            );
        });
    }
);
bot.start(process.env.PORT || 80);
