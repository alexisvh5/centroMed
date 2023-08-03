const express = require("express");

const router = express.Router();

const nosotrosController= require("../controllers/nosotrosController");

router.get("/",nosotrosController.indexNosotros);

module.exports=router