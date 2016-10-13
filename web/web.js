"use strict";
let express = require('express');
let http = require('http');
let app = express();
let mustacheExpress = require('mustache-express');

// middlewares
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/resources/views'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));

// Application Routes
var routes = require('./routes')
routes.set(app);

/*app.get('/', (req, res) => {
    let opt = {
        host: process.env.API_HOST,
        port: process.env.API_PORT
    };
    http.request(opt, (api) => {
        api.on('data', (chunk) => {
            res.send(`<h1>tete ${chunk}</h1>`);
        });
    }).end();
});*/

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});