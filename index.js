const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/calculadora.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Configuración de CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'https://calculadora-front-ecru.vercel.app',  // Permitir solicitudes desde el frontend específico
    methods: ['GET', 'POST', 'OPTIONS'],                  // Incluir 'OPTIONS' para preflight
    allowedHeaders: ['Content-Type'],                     // Encabezados permitidos
    credentials: true                                     // Si es necesario manejar cookies o credenciales
}));

// Ruta para manejar solicitudes preflight (opcional)
app.options('*', cors());  // Manejar solicitudes preflight

app.get('/', async (req, res) => {
    res.send("hola soy el back de la calculadora de Kevin");
});

app.use('/v1/calculadora', router);

app.listen(3500, () => {
    console.log("Listening at port 3500");
});