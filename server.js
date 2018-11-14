require('./src/ApiModels');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/metinetjs', { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected');
});
const app = express();
const bodyParser = require('body-parser');
const APIRouter = require('./src/apiRoutes');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    req.data = {};
    next();
});

app.use('/api', APIRouter);

app.use('/public', express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    next({
        message: 'Erreur 404 : ${req.method} ${req.url} introuvable.',
        status: 404
    });
});

app.use(function (err, req, res, next) {
    const status = err.status || 500;
    res.status(status);

    if (app.get('env') === 'development') {
        console.error(err); // en développement uniquement
    }

    res.format({
        'text/plain': function () {
            res.send(err.message);
        },

        'text/html': function () {
            res.send(
                `<!DOCTYPE html>
                <html lang="fr">
                    <head>
                        <meta charset="utf-8">
                    <title>Erreur ${status}</title>
                    </head>
                    <body>
                        <pre>${err.message}</pre>
                    </body>
                </html>`
            );
        },

        'application/json': function () {
            res.send({"message": err.message});
        },

        'default': function () {
            res.status(406).send("\"Accept\" Header Not Acceptable.");
        }
    });
});

app.listen(3000, function () {
    console.log("Le serveur écoute sur le port 3000");
});