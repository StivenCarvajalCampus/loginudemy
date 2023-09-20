const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

// app.listen(5015)
// console.log('server is runing on port 3000');

let config = JSON.parse(process.env.MY_SERVER)
app.listen(config, ()=>{
  console.log(`http://${config.hostname}:${config.port}`)
})