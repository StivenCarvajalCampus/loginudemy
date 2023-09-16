const express = require('express');
const { use } = require('passport');
const path = require("path");
const session = require('express-session')
const app = express();
const dotenv = require('dotenv');
//Configuraciones
dotenv.config();
let appExpress = express();
appExpress.use(express.json());
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"))

//Middlewares



//Routes
app.use('/', require('./routes/index.routes'))

app.use('/auth', require('./routes/auth.routes'))

app.use('/dashboard', require('./routes/dashboard.routes'))


let config = JSON.parse(process.env.MY_SERVER)
appExpress.listen(config, ()=>{
  console.log(`http://${config.hostname}:${config.port}`)
})
//Variables Globales
module.exports = app



