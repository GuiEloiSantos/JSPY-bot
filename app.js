const BootBot = require('bootbot');
const quickReplyFeedback = ['Ruim', 'Médio', 'Bom'];
const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.setGreetingText("Hey there, my name is Monmate, would you like to see what we have on menu today?");
bot.setGetStartedButton("START");
bot.setPersistentMenu([
    {
        title: 'Food Menu',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Starters',
                type: 'postback',
                payload: 'FIRST'
            },
            {
                title: 'Main',
                type: 'postback',
                payload: 'MAIN'
            },
            {
                title: 'Desert',
                type: 'postback',
                payload: 'DESSERT'
            }
        ]
    },
    {
        title: 'Drinks Menu',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Non Alcoholic',
                type: 'postback',
                payload: 'N_ALC'
            },
            {
                title: 'Alcoholic',
                type: 'postback',
                payload: 'ALC'
            },
            {
                title: 'Wines',
                type: 'postback',
                payload: 'WINE'
            }
        ]
    },
    {
        title: 'Others',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Make a booking',
                type: 'postback',
                payload: 'BOOKING'
            },
            {
                title: 'Leave feedback',
                type: 'postback',
                payload: 'FEEDBACK'
            }
        ]
    }
]);
bot.on('message', (payload, chat) => {
    chat.getUserProfile().then((user) => {
        defaultMessage(`Hey, ${user.first_name}, I can't really understand that, here is what I can help you with`, chat);
    });
});
bot.on('postback:START', (payload, chat) => {
    chat.getUserProfile().then((user) => {
        defaultMessage(`Hey, ${user.first_name}. It will be my honor to serve you, here is what I can help you with:`, chat);
    });
});
bot.on('postback:FIRST', (payload, chat) => {
    chat.sendGenericTemplate([
            {
                title: "Harumake",
                subtitle: "Harumake slow cooked beef with wasabi\nPrice: $ 49.00",
                image_url: "https://unsplash.com/photos/fdlZBWIP0aM",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'HRK_DETAILS'
                    }
                ]
            },
            {
                title: "Desvio",
                subtitle: "Orange sauce with three types of pumpkin!\nPrice: $ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21479645_1437810829638058_2757980882252857344_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'DSV_DETAILS'
                    }
                ]
            },
            {
                title: "Bahianada",
                subtitle: "Tapioca cheese doug with banana prawn and fish sauce!\nPrice: $ 69.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/20688316_1281807721945682_7704893320085897216_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'BHA_DETAILS'
                    }
                ]
            },
            {
                title: "Lamb Cake",
                subtitle: "Lamb, mango sauce, dried yogurt and special sauce!\nPrice: $ 79.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21041600_269913206837418_527865108609630208_n.jpg",
                buttons: [
                    {
                        title: 'More details',
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
                title: "Caneloni",
                subtitle: "Caneloni with onion cheese and honey!\nPrice: $ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21149085_1934382686850805_7055726545351999488_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'CCQCM_DETAILS'
                    }
                ]
            },
            {
                title: "Carbonara Country side",
                subtitle: "Special cut for the pasta and amaparo cheese...\nPrice: $ 59.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/20905682_128547464437893_2480580150173892608_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'CDR_DETAILS'
                    }
                ]
            },
            {
                title: "Crunch pork",
                subtitle: "Boneless pork with crunch skin ...\nPrice: $ 79.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21827056_117635038948942_7639582363755741184_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'LTD_DETAILS'
                    }
                ]
            },
            {
                title: "Pinlinguá",
                subtitle: "Língua com pinhão molho ccc (chouriço, cacau e cafe)...\nPrice: $ 79.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21224515_270570296768338_8947954621888856064_n.jpg",
                buttons: [
                    {
                        title: 'More details',
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
                subtitle: "Cheesecake de doce de leite brûlé com massa de paçoquinha...\nPrice: $ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/21107641_1448030321910814_1423470866200526848_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'CKK_DETAILS'
                    }
                ]
            },
            {
                title: "Torta de Chocolate",
                subtitle: "Torta de chocolate com caramelo Salgado e sorvete de amora!\nPrice: $ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/17932557_1919376308294906_2302619511703994368_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'TDC_DETAILS'
                    }
                ]
            },
            {
                title: "Tiramisu",
                subtitle: "Tiramisu, traduzido por 'me levante para cima'\nPrice: $ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/17494432_183179958864444_3178434369232568320_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'TMS_DETAILS'
                    }
                ]
            },
            {
                title: "Rabanada",
                subtitle: "Rabanada com creme inglês geladinho e coulis de frutas vermelhas!\nPrice: $ 39.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/14719548_1026246167474128_1553071311083798528_n.jpg",
                buttons: [
                    {
                        title: 'More details',
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
                subtitle: "Delicioso Chá natural de Guaraná e gengibre, sem açucar\nPrice: $ 7.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/14360046_622640044585430_6988469539340025856_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'CDC_DETAILS'
                    }
                ]
            },
            {
                title: "Suco Natural",
                subtitle: "Sabores: Maçã, Pera e Uva\nPrice: $ 5.00",
                image_url: "http://www.folhadomate.com//imagens/noticia/43709/55275-suco_de_maca.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'SCN_DETAILS'
                    }
                ]
            },
            {
                title: "Refrigerante Caseiro",
                subtitle: "Mais saudável e mais gostoso que o convencional\nPrice: $ 5.00",
                image_url: "http://www.tarifinasilyapilir.net/wp-content/uploads/buzlu-cay-tarifi-e1375446891620.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'RGCS_DETAILS'
                    }
                ]
            },
            {
                title: "Refrigerante Convéncional",
                subtitle: "Se puder evitar essa opção seu corpo agradece\nPrice: $ 6.00",
                image_url: "http://www.mundoboaforma.com.br/wp-content/uploads/2017/03/refrigerantes-620x330.jpg",
                buttons: [
                    {
                        title: 'More details',
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
bot.on('postback:ALC', (payload, chat) => {
    chat.sendListTemplate([
            {
                title: "Maracu Chá",
                subtitle: "Maracujá, jack daniels, espuma de gengibre\nPrice: $ 13.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/16585009_419464005060061_88164893923999744_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'MRCC_DETAILS'
                    }
                ]
            },
            {
                title: "Drink de Maçã e pimenta",
                subtitle: "Drink de Maçã com pimenta e segredinho da casa\nPrice: $ 15.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/17126606_394465864268016_1773675279676342272_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'DDMP_DETAILS'
                    }
                ]
            },
            {
                title: "Sangria",
                subtitle: "Bebida da Espanha, super deliciosa\nPrice: $ 15.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/16585307_414794198863349_2314872087031840768_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'SANG_DETAILS'
                    }
                ]
            },
            {
                title: "Drink de Aperol",
                subtitle: "Drink de Aperol, o mais famoso da casa\nPrice: $ 16.00",
                image_url: "https://instagram.fplu3-1.fna.fbcdn.net/t51.2885-15/e35/14719360_311155695922323_4265627476752859136_n.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'DDAP_DETAILS'
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
bot.on('postback:WINE', (payload, chat) => {
    chat.sendListTemplate([
            {
                title: "Herdade das Servas",
                subtitle: "Vinho tinto alentejano composto por uvas das castas Aragonês, Touriga Nacional...\nPrice: $ 23.00 / Taça",
                image_url: "http://clubedevinhos.com/files/artigos/10-melhores-vinhos-tintos-para-ceia-natal_01.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'HDSV_DETAILS'
                    }
                ]
            },
            {
                title: "Dom Divino Dão",
                subtitle: "Vinho tinto muito suave de cor rubi com teor alcoólico de 12,5%.\nPrice: $ 25.00",
                image_url: "http://clubedevinhos.com/files/artigos/10-melhores-vinhos-tintos-para-ceia-natal_02.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'DDND_DETAILS'
                    }
                ]
            },
            {
                title: "Mundus ",
                subtitle: "Vinho tinto da região da Estremadura com um teor alcoólico de 13,5%.\nPrice: $ 15.00",
                image_url: "http://clubedevinhos.com/files/artigos/10-melhores-vinhos-tintos-para-ceia-natal_03.jpg",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'MUND_DETAILS'
                    }
                ]
            },
            {
                title: "Serras de Azeitão",
                subtitle: "Vinho tinto é proveniente das terras do Sado\nPrice: $ 16.00",
                image_url: "http://clubedevinhos.com/files/artigos/10-melhores-vinhos-tintos-para-ceia-natal_04.gif",
                buttons: [
                    {
                        title: 'More details',
                        type: 'postback',
                        payload: 'SRDA_DETAILS'
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
bot.on('postback:FEEDBACK', (payload, chat) => {
    chat.conversation((convo) => {
        askHowGood(convo, 'Que ótimo, é sempre bom ouvir aqueles que são mais importantes para nós, para começar, como você avaliaria o Mon Del?');
    });
});
bot.on('postback:BOOKING', (payload, chat) => {
    chat.conversation((convo) => {
        getBooking(convo, 'Obaaa! Que dia você planeja nos visitar?');
    });
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

function askHowGood(convo, msg) {
    const firstquestion = {
        text: msg,
        quickReplies: quickReplyFeedback
    };
    convo.ask(firstquestion,
        (payload, convo) => {
            const answer = payload.message.text;
            switch (answer) {
                case 'Ruim':
                    convo.sendTypingIndicator(6000);
                    convo.ask('😥😥😥\nEu sinto muito que você tinha tido uma má experiência...\nVocê poderia nos dizer qual foi o problema para que possamos fazer melhor da próxima vez?',
                        (payload, convo) => {
                            convo.sendTypingIndicator(6000);
                            convo.say('Anotado, por mais que gostáriamos de te oferecer a melhor experiência possível fico feliz por você ter compartilhado os problemas comigo.\nVou ter uma conversa com o time sobre isso e da próxima vez prometo que será melhor\nMuito obrigado pela preferência e vou estár aguardando seu retorno para provar como você importa para nós! 😘😘😘');
                            convo.end();
                        }
                    );
                    break;
                case 'Médio':
                    convo.sendTypingIndicator(6000);
                    convo.ask('😩😩😩\nQue pena, gostáriamos que sua experiência aqui fosse excelente...\nVocê poderia nos dizer quais foram os problemas e os acertos para que possamos fazer melhor da próxima vez?',
                        (payload, convo) => {
                            convo.sendTypingIndicator(6000);
                            convo.say('Anotado, por mais que gostáriamos de te oferecer a melhor experiência possível fico feliz por você ter compartilhado seu feedback.\nVou ter uma conversa com o time sobre isso e da próxima vez proometo que será ainda melhor\nMuito obrigado pela preferência e vou estár aguardando seu retorno para provar como você importa para nós! 😘😘😘');
                            convo.end();
                        }
                    );
                    break;
                case 'Bom':
                    convo.sendTypingIndicator(6000);
                    convo.ask('😁😁😁\nQue ótimo poder ouvir isso de você! É por você que dedicamos todos nossos esforços e saber que você está satisfeito enche nossos corações de alegria!\nVocê pode me dizer do que você mais gostou?',
                        (payload, convo) => {
                            convo.sendTypingIndicator(6000);
                            convo.say('😜 Muito obrigado pelo feedback, estamos a procura de melhorar a cada dia e seu feedback é muito importante pra isso.\n Muito obrigado também pela preferência e vou estár aguardando pra bater um papo com você novamente! 😘😘😘');
                            convo.end();
                        }
                    );
                    break;
                default:
                    convo.sendTypingIndicator(2000);
                    askHowGood(convo, 'Eu não entendi muito bem, você poderia escolher uma das opções a baixo?');
                    break;
            }
        });
}

function getBooking(convo, msg) {

    let startDate = new Date();
    const firstquestion = {
        text: msg,
        quickReplies: GetDates(startDate, 7)
    };
    convo.ask(firstquestion,
        (payload, convo) => {
            const answer = payload.message.text;
            convo.set('day', answer);
            if (matchPattern(answer)) {
                convo.set('day', answer);
                getTimeBooking(convo, `Ótimo, então temos um encontro marcado ${answer}.\nA que qual horário séria melhor para você?`);
            } else {
                getBooking(convo, "Eu acho que não tenho essa data dísponível, você pode escolher uma das disponível abaixo?")
            }
        });
}

function getTimeBooking(convo, msg) {
    let timeQuest = {
        text: msg,
        quickReplies: ['Manhã', 'Tarde', 'Noite']
    };
    convo.ask(timeQuest,
        (payload, convo) => {

            const answer = payload.message.text;
            let day = convo.get('day');
            switch (answer) {
                case 'Manhã':
                    convo.say(`Que ótimo! Não posso esperar para te ter aqui na nossa casinha!\n${day} de ${answer} a temperatura prevista é de 24℃, será um dia super agradável, ainda mais com você aqui
Sua reserva está confirmada e eu vou estár te esperando, o endereço caso não saiba é:
Rua Agostinho Bretas, 8. Até logo!`);
                    convo.end();
                    break;
                case 'Tarde':
                    convo.say(`Que ótimo! Não posso esperar para te ter aqui na nossa casinha!\n${day} de ${answer} a temperatura prevista é de 21℃, será uma tarde super aconchegante.\nSua reserva está confirmada e eu vou estár te esperando, o endereço caso não saiba é:\nRua Agostinho Bretas, 8.  Até logo!`);
                    convo.end();
                    break;
                case 'Noite':
                    convo.say(`Que ótimo! Não posso esperar para te ter aqui na nossa casinha!\n${day} de ${answer} a temperatura prevista é de 15℃ e vamos ter um evento de caldos, nada melhor para uma noite fria né?.\nSua reserva está confirmada e eu vou estár te esperando, o endereço caso não saiba é:\nRua Agostinho Bretas, 8.  Até logo!`);
                    convo.end();
                    break;
                default:
                    getTimeBooking(convo, 'Desculpa eu não entendi, poderia selecionar uma das opções abaixo?');
                    break;
            }
        }
    );
}

function GetDates(startDate, daysToAdd) {
    let aryDates = [];
    let month = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"],
        weekdays = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado"];
    for (let i = 0; i <= daysToAdd; i++) {
        let currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(weekdays[currentDate.getDay()] + " dia " + currentDate.getDate() + " de " + month[currentDate.getMonth()]);
    }

    return aryDates;
}

function matchPattern(answer) {

    const test = answer.split(' ');
    let month = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"],
        weekdays = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado"];

    return true; //(weekdays.indexOf(test[0]) !== -1 && test[1] === "dia" && !isNaN((test[2])) && (test[3] === 'de') && month.indexOf(test[4]) !== -1);
}
