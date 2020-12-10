var express = require('express');
var router = express.Router();
const animalsCtrl = require("../controllers/api/animals");

/* GET users listing. */
router.get('/animals', animalsCtrl.index);
router.get("/animals/:id", animalsCtrl.show);
router.post("/animals", animalsCtrl.create);
router.put("/animals/:id", animalsCtrl.update);
router.delete("/animals/:id", animalsCtrl.delete);

module.exports = router;
