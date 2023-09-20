const express = require('express');
const { use } = require('passport');
const path = require("path");
const session = require('express-session');
const passport = require('passport');


const app = express();

require('./strategies/discordStrategy')
//Configuraciones
let appExpress = express();
appExpress.use(express.json());
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"))

//Middlewares
app.use(session({
  secret:'some secret',
  saveUninitialized:false,
  resave: false
}))
app.use(passport.initialize())
app.use(passport.session())


//Routes
app.use('/', require('./routes/index.routes'));

app.use('/auth', require('./routes/auth.routes'));

app.use('/dashboard', require('./routes/dashboard.routes'));


// let config = JSON.parse(process.env.MY_SERVER)
// appExpress.listen(config, ()=>{
//   console.log(`http://${config.hostname}:${config.port}`)
// })
//Variables Globales
module.exports = app



