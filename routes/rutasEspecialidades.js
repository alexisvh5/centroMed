const express = require("express");

const router = express.Router();

const especialidadesController = require("../controllers/especialidadesController.js")

router.get("/", especialidadesController.especialidadesIndex)

module.exports=router;