const express = require('express');
const app = express()
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello Connor. Lets test github actions - V#3 Auto deployment worked ??');
});

app.listen(port);
console.log(`App listening on port ${port}`);

