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
app.set('views', path.join(__dirname, 'src', 'views'));

app.set('view engine', 'jsx'); // Usar el motor de vistas "jsx"

// Middleware para compilar JSX
app.engine('jsx', require('express-react-views').createEngine());

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



