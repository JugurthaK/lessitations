const mysql = require('mysql');
const auth = require ('./config.js');
let connection = mysql.createConnection(auth.mysql);

module.exports = {
    addCitation : 
        function(auteur, citation){
        connection.query('INSERT INTO citation(auteur, citation) VALUES(?, ?)', [auteur, citation], (err, res, fields) => {
            if (err) throw err;
        });
    },

    getCitations : 
        function(callback){
            connection.query('SELECT * FROM citation', (err,res,fields) => {
                callback(JSON.parse(JSON.stringify(res)));
            });
        }
}
