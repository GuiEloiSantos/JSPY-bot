const BootBot = require('bootbot');
const quickReplyFeedback = ['Ruim', 'Médio', 'Bom'];
const yesNo = ['Sim', 'Não'];

const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.setGreetingText("Olá meu nome é Mate, eu sou o agente virtual que vai te ajudar a entender o projeto do Guilherme, vamos começar?");
bot.setGetStartedButton("START");
bot.setPersistentMenu([
    {
        title: 'Sequencia de perguntas',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Testar',
                type: 'postback',
                payload: 'TEST-FAQ'
            },
            {
                title: 'Vantagens',
                type: 'postback',
                payload: 'VANT-FAQ'
            },
            {
                title: 'Desvantagens',
                type: 'postback',
                payload: 'DESV-FAQ'
            }
        ]
    },
    {
        title: 'NLP',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Testar',
                type: 'postback',
                payload: 'TEST-IA'
            },
            {
                title: 'Vantagens',
                type: 'postback',
                payload: 'VANT-IA'
            },
            {
                title: 'Desvantagens',
                type: 'postback',
                payload: 'DESV-IA'
            }
        ]
    },
    {
        title: 'Expressão Regular',
        type: 'nested',
        call_to_actions: [
            {
                title: 'Testar',
                type: 'postback',
                payload: 'TEST-BER'
            },
            {
                title: 'Vantagens',
                type: 'postback',
                payload: 'VANT-BER'
            },
            {
                title: 'Desvantagens',
                type: 'postback',
                payload: 'DESV-BER'
            }
        ]
    }
]);
bot.on('message', (payload, chat) => {
    console.log(payload);
    console.log(payload.message.nlp);
    console.log(payload.message.nlp.entities);
    console.log(chat);
    chat.getUserProfile().then((user) => {
        defaultMessage(`Olha, ${user.first_name}, isso é um pouco vergonhoso mas eu prefiro me ater as opções no menu para não cometer nenhum erro...\nSabe como é né? É melhor assim, se não eu iria acabar roubando seu trabalho.\nAqui estão as opções em que posso te ajudar:`, chat);
    });
});
bot.on('postback:START', (payload, chat) => {
    chat.getUserProfile().then((user) => {
        defaultMessage(`Oi, ${user.first_name}. Será um prazer te ajudar você! Aqui estão os diferentes metodos utilizados:`, chat);
    });
});
bot.on('postback:TEST-FAQ', (payload, chat) => {
    chat.conversation((convo) => {
        testFaq(convo, 'Ótimo, então vamos começar. Qual é seu nome?');
    });
});
bot.on('postback:VANT-FAQ', (payload, chat) => {
    chat.say('Bem, a grande vantagem do sistema de perguntas e resposta é a simplicidade do mesmo, uma vez que usa o fluxo natural do chat para adquirir as respostas, ele não aumenta em nada o tempo de chat.');
});
bot.on('postback:DESV-FAQ', (payload, chat) => {
    chat.say('A lista é grande, primeiramente, ele tende a inflacionar o número de contatos adquiridos, uma vez que toda sequencia de captura iniciada será considerada um contato a mais, mas muitas deles não são, também é um processo extremamente robotico e último e mais importante, quando detectados padrões como esse a maioria das informações dadas são ou ' +
        'informações providas com a inteção de enganar ou informação poluida, ou seja o processo pode concluir que o nome de alguém é "Marta e preciso que alguem me ligue rápido".');
});

bot.on('postback:TEST-IA', (payload, chat) => {
    chat.conversation((convo) => {
        testIA(convo, 'Beleza, vamos lá. Fale qualquer sentença que eu vou tentar identificar as informações de contato (Obs: eu sou melhor no Inglês), quando quiser terminar digite terminar e eu pararei de procurar por informações de contato. ');
    });
});
bot.on('postback:VANT-IA', (payload, chat) => {
    chat.say('Como você pode ver a IA é ótima pra reconhecer padrões, ainda pode ser treinada para melhorar, além disso não interfere em absolutamente nada no fluxo do chat, quando o chat é finalizado é só varrer o texto atras das informações de contato.');
});
bot.on('postback:DESV-IA', (payload, chat) => {
    chat.say('O primeiro problema de usar qualquer algoritimo de linguagem natural é a imprevisibilidade dos resultados, pode ser que devido a algum treinamento ou algum padrão ocorra um erro, o segundo é que ele é muito eficiente pra identificar contatos, mas não de quem são os contatos, o que aumenta a taxa de erro.');
});

bot.on('postback:TEST-BER', (payload, chat) => {
    chat.conversation((convo) => {
        testReg(convo, 'Beleza, vamos testar lá, digite uma setença livre que eu vou tentar identificar que há algum contato ou não, querendo terminar digite "Terminar".');
    });
});
bot.on('postback:VANT-BER', (payload, chat) => {
    chat.say('Olha, quase tudo pode ser feito com RegEx e além disso todo RegEx se comporta de maneira previsivel, ou seja é possivel só abordar estritamente cenários desejados.');
});
bot.on('postback:DESV-BER', (payload, chat) => {
    chat.say('O grande problema é a dificuldade de se criar todos os critérios possíveis, uma vez que existem milhares de modos de se passar um email ou telefone.');
});


bot.start(process.env.PORT || 80);

function defaultMessage(msg, chat) {
    chat.say(msg);
    chat.sendGenericTemplate([
            {
                title: "Sequencia de pergunta e respostas",
                subtitle: "A ideia disso é iniciar uma sequencia de captura de lead e destacar a informação relevante usando a resposta do cliente",
                image_url: "http://www.ictq.com.br/images/10-perguntas-e-respostas-importantes-sobre-validacao-de-limpeza-na-industria-farmaceutica-farmacia-farmaceutico-farmaceutica-ictq.jpeg",
                buttons: [
                    {
                        title: 'Testar',
                        type: 'postback',
                        payload: 'TEST-FAQ'
                    },
                    {
                        title: 'Vantagens',
                        type: 'postback',
                        payload: 'VANT-FAQ'
                    },
                    {
                        title: 'Desvantagens',
                        type: 'postback',
                        payload: 'DESV-FAQ'
                    }
                ]
            },
            {
                title: "NLP",
                subtitle: "Nesse metodo a ideia é utilizar de algoritimos de linguagem natural para interpretar uma entrada de usuario e destacar as informações de contato",
                image_url: "http://www.hytrade.com.br/wp-content/uploads/2015/11/3-maneiras-de-colocar-dados-de-inteligencia-de-negocios-baseados-em-vendas-para-funcionar-para-voces.jpg",
                buttons: [
                    {
                        title: 'Testar',
                        type: 'postback',
                        payload: 'TEST-IA'
                    },
                    {
                        title: 'Vantagens',
                        type: 'postback',
                        payload: 'VANT-IA'
                    },
                    {
                        title: 'Desvantagens',
                        type: 'postback',
                        payload: 'DESV-IA'
                    }
                ]
            },
            {
                title: "Biblioteca de expressão regulares",
                subtitle: "Neste metodo a ideia é criar diversos padrões para identificar o contato do usuário",
                image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzzcjgHCWVEVMKBeR6ARtia0nZnnLNASaVHKdJQoKa_NlcZge",
                buttons: [
                    {
                        title: 'Testar',
                        type: 'postback',
                        payload: 'TEST-BER'
                    },
                    {
                        title: 'Vantagens',
                        type: 'postback',
                        payload: 'VANT-BER'
                    },
                    {
                        title: 'Desvantagens',
                        type: 'postback',
                        payload: 'DESV-BER'
                    }
                ]
            }
        ],
        []
    ).then((result) => {
        console.log(result);

    });
}

function testFaq(convo, msg) {

    convo.ask(msg,
        (payload, convo) => {
            let name = payload.message.text;
            convo.set('name', name);
            convo.ask(`Prazer em conhece-lo ${name}, você poderia me falar seu email?`,
                (payload, convo) => {
                    let email = payload.message.text;
                    convo.set('email', email);
                    convo.ask(`Ótimo, por fim, qual o melhor metodo pra entrar em contato com você?`,
                        (payload, convo) => {
                            let phone = payload.message.text;
                            convo.set('phone', phone);
                            convo.ask({
                                    text: `Excelente, só para confimar, seu nome é: ${name},\n seu telefone é: ${phone}\n e seu email é ${email}?`,
                                    quickReplies: yesNo
                                },
                                (payload, convo) => {
                                    let answer = payload.message.text;
                                    if (answer === 'Sim') {
                                        convo.say(`Ótimo ${name}, espero que tenha ficado claro como o sistema de sequencia de perguntas funciona.`);
                                        convo.end();
                                    } else {
                                        testFaq(convo, 'Ok, vamos tentar novamente, qual é seu nome?');
                                    }
                                });
                        });
                });
        });
}

function testIA(convo, msg) {

    convo.ask(msg,
        (payload, convo) => {
            if (payload.message.text === 'Terminar') {
                convo.say(`Beleza espero que tenha gostado!`);
                convo.end();
            } else {
                let phone = [], email = [];
                if (payload.message.nlp.entities.phone_number) {
                    for (let i = 0, size = payload.message.nlp.entities.phone_number.length; i < size; i++) {
                        if (payload.message.nlp.entities.phone_number[i].confidence > 0.5) {
                            phone.push(payload.message.nlp.entities.phone_number[i].value + " com bastante certeza. \n");
                        } else {
                            phone.push(payload.message.nlp.entities.phone_number[i].value + " mas posso estar errado. \n");
                        }
                    }
                }
                if (payload.message.nlp.entities.email) {
                    for (let i = 0, size = payload.message.nlp.entities.email.length; i < size; i++) {
                        if (payload.message.nlp.entities.email[i].confidence > 0.5) {
                            email.push(payload.message.nlp.entities.email[i].value + " com bastante certeza. \n");
                        } else {
                            email.push(payload.message.nlp.entities.email[i].value + " mas posso estar errado. \n");
                        }
                    }
                }
                let message = 'Telefones: ' + phone.join(' ,') + '\n Emails: ' + email.join(' ,');
                convo.say(message);
                testIA(convo, "Vamos denovo?");
            }
        });
}


function testReg(convo, msg) {

    convo.ask(msg,
        (payload, convo) => {
            if (payload.message.text === 'Terminar') {
                convo.say(`Beleza espero que tenha gostado!`);
                convo.end();
            } else {
                let resp;
                resp = splitSetence(payload.message.text);

                let message = 'Telefone: ' +(resp.phone?resp.phone:'achei não ') + '\n Email: ' + (resp.email?resp.email:'achei não');
                convo.say(message);
                testReg(convo, "Vamos denovo?");
            }
        });
}


function splitSetence(text) {
    const myPhone = "meu telefone", youCanCallMeAt = "pode me ligar", myEmail = "meu email";
    let  email, phone, aux1 = "",  index;
    text = text.toLowerCase();
    if (text.includes(myPhone)) {
        index = text.indexOf(myPhone);
        console.log('Index: '+index);
        if (index > 2) {
            if (text[index - 2] === "e" ||
                text[index - 2] === "é") {
                aux1 = text.split(myPhone);
                phone = validatePhone(aux1[0]);
            }
        }

        index += myPhone.length;
        if(text.length > index+2){
            if (text[index + 2] === "e" ||
                text[index + 2] === "é") {
                aux1 = text.split(myPhone);
                phone = validatePhone(aux1[1])?validatePhone(aux1[1]):phone;
            }
        }
    } else if (text.includes(youCanCallMeAt)) {
        index = text.indexOf(youCanCallMeAt) + youCanCallMeAt.length;
        if(text.length > index+2){
            if (text[index + 2] === "no" ||
                text[index + 2] === "usando") {
                aux1 = text.split(youCanCallMeAt);
                phone = validatePhone(aux1[1])?validatePhone(aux1[1]):phone;
            }
        }
    }
    if (text.includes(myEmail)) {
        index = text.indexOf(myEmail);
        if (index > 2) {
            if (text[index - 2] === "e" ||
                text[index - 2] === "é") {
                aux1 = text.split(myEmail);
                email = validateEmail(aux1[0]);
            }
        }
        index += myEmail.length;
        if(text.length > index+2){
            if (text[index + 2] === "e" ||
                text[index + 2] === "é") {
                aux1 = text.split(myEmail);
                email = validateEmail(aux1[1])?validateEmail(aux1[1]):email;
            }
        }
    }
    return {email:email, phone: phone};
}

function validateEmail(text) {
    let aux = text.split(" ");
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for(let i =0, size = aux.length; i<size; i++){
        if(aux[i].match(re))
            return aux[i].match(re);
    }
    return "";
}

function validatePhone(text) {
    let aux = text.split(" ");
    let re = /^[a-z 0-9._]+$/ig;
    for(let i =0, size = aux.length; i<size; i++){
        if(aux[i].match(re))
            return aux[i].match(re);
    }
    return "";
}