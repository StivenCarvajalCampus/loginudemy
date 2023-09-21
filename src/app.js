const express = require('express');
const { use } = require('passport');
const path = require("path");
const session = require('express-session');
const passport = require('passport');
const ejs = require('ejs');


const app = express();

require('./strategies/discordStrategy')
//Configuraciones
let appExpress = express();
appExpress.use(express.json());
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"))
app.engine('ejs', ejs.renderFile); 

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

app.use('/', require('./routes/dashboard.routes'));



//const navigate=useNavigate()


//navigate("/dashboard")


// let config = JSON.parse(process.env.MY_SERVER)
// appExpress.listen(config, ()=>{
//   console.log(`http://${config.hostname}:${config.port}`)
// })
//Variables Globales
module.exports = app



