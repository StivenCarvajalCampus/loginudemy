const { Router }= require("express");
const router = Router();

router.get('/auth',(req, res)=>{
  res.send('login')

})
module.exports = router ;