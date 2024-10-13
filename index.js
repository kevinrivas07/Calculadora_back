const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/calculadora.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Configuración de CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'https://calculadora-front-ecru.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', async (req, res) => {
    res.send("hola soy el back de la calculadora de Kevin");
});

app.use('/v1/calculadora', router);

app.listen(3500, () => {
    console.log("Listening at port 3500");
});