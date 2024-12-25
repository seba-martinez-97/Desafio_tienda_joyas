const express = require('express');
const router = express.Router();

const Controller = require ("../controllers/JoyasController.js");

router.get("/joyas", Controller.getJoyas)
router.get("/joya/:id", Controller.getJoyas)
router.get("/joyas/filtros", Controller.getFilter)

module.exports = router;