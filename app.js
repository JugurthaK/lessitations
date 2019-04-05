const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./config');
const database = require('./database');
let tabCitation = [];
database.getCitations(res => {
    tabCitation = res;
})
client.on('ready', () => {
    console.log(`Logged as : ${client.user.tag}`);

})

client.on('message', msg => {

    if (msg.content.startsWith('!add')){
        let args = msg.content.split(' ');
        if (args[2] != undefined){
            let auteur = args[1];
            args = args.slice(2);
            let citation = '';
            args.forEach(mot => {
                citation+= mot + ' ';
            })
            database.addCitation(auteur, citation);
            database.getCitations(res => {
                tabCitation = res;
            });
            msg.reply(" La citation a bien été ajoutée");
        }
    } else if (msg.content.startsWith('!random')){
        let random = tabCitation[Math.floor(Math.random() * tabCitation.length)];
        msg.channel.send(`${random.citation} *- De : ${random.auteur}*`);    
    }
})

client.login(auth.key);

// To monitor it
const express = require ('express');
let app = express();

app.get('/alive', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify({
        name:'lessitations',
        alive:'yes'}));
});

app.listen(8080);