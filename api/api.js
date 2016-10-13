"use strict";
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Mica!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});