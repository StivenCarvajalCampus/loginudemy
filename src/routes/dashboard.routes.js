const { Router } = require("express");
const router = Router();

router.get('/dashboard', (req, res) => {
  res.render("dashboard"); // Esto renderizará la vista "dashboard.ejs"
});

module.exports = router;