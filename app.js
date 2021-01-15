const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port;

app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log("Servidor esta en el puerto " + port);
});