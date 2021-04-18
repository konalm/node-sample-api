const express = require('express');
const cors = require('cors');
const app = express()
const port = 8000;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.get('/', cors(), (req, res) => {
    res.send('Hello Connor. Lets test github actions - V#3 Auto deployment worked ??');
});

app.get('/name', (req, res) => {
    res.send('name');
})

app.listen(port);
console.log(`App listening on port ${port}`);

