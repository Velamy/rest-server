require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('GET usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es nesesario para poder realizar esta petición"
        })
    } else {
        res.json({
            body
        });
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', (req, res) => {
    res.json('DELETE usuario');
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT);
});