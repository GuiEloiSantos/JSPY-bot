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
                payload: 'DESSERT'
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
        defaultMessage(`Olha, ${user.first_name}, isso é um pouco vergonhoso mas eu prefiro me ater as opções no menu para não cometer nenhum erro...\nSabe como é né? É melhor assim, se não eu iria acabar roubando seu trabalho.\nAqui estão as opções em que posso te ajudar:`, chat);
    });
});
bot.on('postback:START', (payload, chat) => {
    chat.getUserProfile().then((user) => {
        defaultMessage(`Oi, ${user.first_name}. Será um prazer atender você! Aqui está as opções em que posso te ajudar:`, chat);
    });
});
bot.on('postback:FIRST', (payload, chat) => {
    chat.sendGenericTemplate([
            {
                title: "Harumake",
                subtitle: "Harumake de carne de panela com chantilly de wasabi!\nPreço: R$ 49.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21690669_745706748887433_195117319125467136_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'HRK_DETAILS'
                    }
                ]
            },
            {
                title: "Desvio",
                subtitle: "Desvio para o Laranja ou a Trilogia da Abóbora!\nPreço: R$ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21479645_1437810829638058_2757980882252857344_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'DSV_DETAILS'
                    }
                ]
            },
            {
                title: "Bahianada",
                subtitle: "Dadinhos de tapioca, banana, camarão e molho de moqueca!\nPreço: R$ 69.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21827056_117635038948942_7639582363755741184_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'BHA_DETAILS'
                    }
                ]
            },
            {
                title: "Bolinho de Corda",
                subtitle: "Cordeiro, chutney de manga, coalhada seca e molho ccc!\nPreço: R$ 79.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21827056_117635038948942_7639582363755741184_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'BDC_DETAILS'
                    }
                ]
            }
        ],
        []
    ).then((result) => {
            console.log(result);
        }
    );
});
bot.on('postback:MAIN', (payload, chat) => {
    chat.sendGenericTemplate([
            {
                title: "Vem ká neloni",
                subtitle: "Caneloni de cebola queijo canastra e mel!\nPreço: R$ 59.00",
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
                subtitle: "Massa de corte rústico, queijo Tulia de Amparo...\nPreço: R$ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/20905682_128547464437893_2480580150173892608_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'CDR_DETAILS'
                    }
                ]
            },
            {
                title: "Leitada",
                subtitle: "Leitoa desossada e prensada, pele crocante, risoto de ...\nPreço: R$ 79.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21827056_117635038948942_7639582363755741184_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'LTD_DETAILS'
                    }
                ]
            },
            {
                title: "Pinlinguá",
                subtitle: "Língua com pinhão molho ccc (chouriço, cacau e cafe)...\nPreço: R$ 79.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21224515_270570296768338_8947954621888856064_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'PLG_DETAILS'
                    }
                ]
            }
        ],
        []
    ).then((result) => {
            console.log(result);
        }
    );
});
bot.on('postback:DESSERT', (payload, chat) => {
    chat.sendGenericTemplate([
            {
                title: "Cheesecake ",
                subtitle: "Cheesecake de doce de leite brûlé com massa de paçoquinha...\nPreço: R$ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21107641_1448030321910814_1423470866200526848_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'CKK_DETAILS'
                    }
                ]
            },
            {
                title: "Torta de Chocolate",
                subtitle: "Torta de chocolate com caramelo Salgado e sorvete de amora!\nPreço: R$ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/17932557_1919376308294906_2302619511703994368_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'TDC_DETAILS'
                    }
                ]
            },
            {
                title: "Tiramisu",
                subtitle: "Tiramisu, traduzido por 'me levante para cima'\nPreço: R$ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/17494432_183179958864444_3178434369232568320_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'TMS_DETAILS'
                    }
                ]
            },
            {
                title: "Rabanada",
                subtitle: "Rabanada com creme inglês geladinho e coulis de frutas vermelhas!\nPreço: R$ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/14719548_1026246167474128_1553071311083798528_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'RBN_DETAILS'
                    }
                ]
            }
        ],
        []
    ).then((result) => {
            console.log(result);
        }
    );
});
bot.on('postback:N_ALC', (payload, chat) => {
    chat.sendListTemplate([
            {
                title: "Chá da casa",
                subtitle: "Delicioso Chá natural de Guaraná e gengibre, sem açucar\nPreço: R$ 7.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/14360046_622640044585430_6988469539340025856_n.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'CDC_DETAILS'
                    }
                ]
            },
            {
                title: "Suco Natural",
                subtitle: "Sabores: Maçã, Pera e Uva\nPreço: R$ 5.00",
                image_url: "http://www.folhadomate.com//imagens/noticia/43709/55275-suco_de_maca.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'SCN_DETAILS'
                    }
                ]
            },
            {
                title: "Refrigerante Caseiro",
                subtitle: "Mais saudável e mais gostoso que o convencional\nPreço: R$ 5.00",
                image_url: "http://www.tarifinasilyapilir.net/wp-content/uploads/buzlu-cay-tarifi-e1375446891620.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'RGCS_DETAILS'
                    }
                ]
            },
            {
                title: "Refrigerante Convéncional",
                subtitle: "Se puder evitar essa opção seu corpo agradece\nPreço: R$ 6.00",
                image_url: "http://www.mundoboaforma.com.br/wp-content/uploads/2017/03/refrigerantes-620x330.jpg",
                buttons: [
                    {
                        title: 'Mais detalhes',
                        type: 'postback',
                        payload: 'RGCV_DETAILS'
                    }
                ]
            }
        ],
        []
    ).then((result) => {
            console.log(result);
        }
    );
});


bot.start(process.env.PORT || 80);

function defaultMessage(msg, chat) {
    chat.say(msg);
    chat.sendGenericTemplate([
            {
                title: "Nosso novo menu está cada dia mais cativante",
                subtitle: "São diversas opções, tudo feito com muita tecnica e acima de tudo amor!",
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
                        payload: 'DESSERT'
                    }
                ]
            },
            {
                title: "Menu de Bebidas",
                subtitle: "Do tradicional ao inovador e exclusivo, confira a nossas opcões de bebidas!",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/16585009_419464005060061_88164893923999744_n.jpg",
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
    ).then((result) => {
        console.log(result);

    });
}