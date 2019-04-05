const express = require ('express');
const bot = require('./app');
let app = express();

app.get('/alive', (req, res) => {
    res.set('Content-Type', 'application/json');
    if (bot.isAlive){
        res.send(JSON.stringify({
            name:'lessitations',
            alive:'yes'}));
    } else {
        res.send(JSON.stringify({
            name:'lessitations',
            alive:'no'}));
    }
});

app.listen(8080);