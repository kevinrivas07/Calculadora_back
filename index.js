const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/calculadora.routes.js');
const cors = require('cors');

const app = express();

// Middleware para el body de las solicitudes
app.use(urlencoded({ extended: true }));
app.use(json());

// Configuración de CORS
app.use(cors({
    origin: 'https://calculadora-front-ecru.vercel.app', // Dominio del frontend
    methods: ['GET', 'POST', 'OPTIONS'],                // Métodos permitidos
    allowedHeaders: ['Content-Type'],                   // Encabezados permitidos
    credentials: true                                   // Si necesitas cookies o autenticación
}));

// Ruta para solicitudes preflight (opcional pero recomendable)
app.options('*', cors());  // Permitir preflight requests para todas las rutas

// Ruta principal
app.get('/', async (req, res) => {
    res.send("Hola, soy el back de la calculadora de Kevin");
});

// Rutas de la calculadora
app.use('/v1/calculadora', router);

// Inicializar servidor
app.listen(3500, () => {
    console.log("Servidor escuchando en el puerto 3500");
});