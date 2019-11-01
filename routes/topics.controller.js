const Pool = require('pg').Pool;
//yhdistämisparametrit toisessa moduulissa
const config = require('./config');

const allas = new Pool(config.connectionOptions);

function getTopic(callback) {
    //haetaan yhteys altaasta
    allas.connect((err, client) => {
        if (err) throw err;
        //luodaan kysely tietokannasta
        client.query("SELECT * FROM topic", (err, data) => {
            //tarkistetaan virhe
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

//Hae yksi
function getSingleTopic(req, callback) {
    allas.connect((err, client) => {
        if (err) throw err;
        client.query('SELECT * FROM topic where id = $1', [req.params.id], (err, data) => {
                if (err) throw err;
                client.release();
                callback(data.rows);
            });
    });
}

function createTopic(req, callback) {
    allas.connect((err, client) => {
        if (err) throw err;
        client.query('INSERT INTO topic(title, description, timetomaster, timespent, source, startlearningdate, inprogress) VALUES($1, $2, $3, $4, $5, $6, $7)',
                [req.body.title, req.body.description, req.body.timetomaster, req.body.timespent, req.body.source, req.body.startlearningdate, req.body.inprogress], (err, data) => {
            if (err) throw err;
            client.release();
            callback();
        });
    });
}

// //PUT toiminnallisuus eli käyttäjätiedon päivitys
function updateTopic(req, callback) {
    allas.connect((err, client) => {
        if (err) throw err;
        client.query('UPDATE topic SET nimi = $1, sposti = $2, kaupunki = $3 WHERE id = $4',
            [req.body.nimi, req.body.sposti, req.body.kaupunki, parseInt(req.params.id)],
            (err, data) => {
                if (err) throw err;
                client.release();
                callback();
            });
    });
}

module.exports = { getTopic, getSingleTopic, createTopic, updateTopic }
