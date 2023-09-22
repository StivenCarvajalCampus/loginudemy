const express = require('express');
const path = require('path');

const app = express();

// Configuración de vistas
app.set('views', path.join('src','views'));
app.set('view engine', 'jsx'); // Usar el motor de vistas "jsx"

// Middleware para compilar JSX
app.engine('jsx', require('express-react-views').createEngine());

// Rutas
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// Resto de la configuración y rutas

module.exports = app;
