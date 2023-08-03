const express = require("express");

const router = express.Router();

const medicosController= require("../controllers/medicosController");

router.get("/",medicosController.medicos)
router.get("/search",medicosController.search)

module.exports=router