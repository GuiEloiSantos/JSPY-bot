const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.setGreetingText("Olá meu nome é Mate, precisa de mais informações sobre pratos e o Mon Del?");
bot.setGetStartedButton("START");
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
    chat.getUserProfile().then((user) => {
        chat.say(`Olha ${user.first_name} isso é um pouco vergonhoso mas eu prefiro me ater as opções no menu para não cometer nenhum erro: `);
        chat.sendListTemplate([
                {
                    title: "Nosso novo menu está cada dia mais cativante",
                    subtitle: "São diversas opcões para qualquer tipo de gosto e horário, tudo feito com muita tecnica, conhecimento e acima de tudo amor!",
                    image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/19985152_154583508443911_7143972438064234496_n.jpg",
                    buttons: [
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
                    title: "Menu de Bebidas",
                    subtitle: "Do tradicional ao inovador e exclusivo, confira a nossas opções de bebidas!",
                    image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/20968599_1413818518731403_2371003499954569216_n.jpg",
                    buttons: [
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
                    title: "Outras opcões",
                    subtitle: "Faca sua reserva, deixe um feedback ou veja nossas promoções!",
                    image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/18380940_1419359341457985_5632516340716666880_n.jpg",
                    buttons: [
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
            ],
            []
        ).then((result, err) => {
                console.log(result);
                console.log(err);
            }
        );
    });
});
bot.on('postback:START', (payload, chat) => {
        chat.getUserProfile().then((user) => {
            chat.say(`Oi, ${user.first_name}. Será um prazer atender você! Aqui está as opções em que posso te ajudar:`);
            chat.sendListTemplate([
                    {
                        title: "Nosso novo menu está cada dia mais cativante",
                        subtitle: "São diversas opcões para qualquer tipo de gosto e horário, tudo feito com muita tecnica, conhecimento e acima de tudo amor!",
                        image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/19985152_154583508443911_7143972438064234496_n.jpg",
                        buttons: [
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
                        title: "Menu de Bebidas",
                        subtitle: "Do tradicional ao inovador e exclusivo, confira a nossas opcões de bebidas!",
                        image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/20968599_1413818518731403_2371003499954569216_n.jpg",
                        buttons: [
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
                        title: "Outras opcões",
                        subtitle: "Faca sua reserva, deixe um feedback ou veja nossas promocões!",
                        image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/18380940_1419359341457985_5632516340716666880_n.jpg",
                        buttons: [
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
                ],
                []
            ).then((result, err) => {
                    console.log(result);
                    console.log(err);
                }
            );
        });
    }
);

bot.on('postback:MAIN', (payload, chat) => {
    chat.sendGenericTemplate([
            {
                title: "Vem ká neloni",
                subtitle: "Caneloni de cebola queijo canastra e mel! \n Preço: R$ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21149085_1934382686850805_7055726545351999488_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'CCQCM_DETAILS'
                    }
                ]
            },
            {
                title: "Carbonara da Roça",
                subtitle: "Massa de corte rústico, queijo Tulia de Amparo... \n Preço: R$ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/20905682_128547464437893_2480580150173892608_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'CDR_DETAILS'
                    }
                ]
            }
        ],
        []
    ).then((result, err) => {
            console.log(result);
            console.log(err);
        }
    );
});
bot.start(process.env.PORT || 80);
