// Módulos
const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.resolve(__dirname, './views'));
const mainRoutes = require('./routes/mainRouter');

// Configuración
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRoutes);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})