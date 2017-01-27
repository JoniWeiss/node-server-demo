'use strict';
const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('\n\nHello World!\n\n');
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});

module.exports = app;