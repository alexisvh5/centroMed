const express = require("express");

const app = express();

//const path =  require("path");

const rutasEspecialidades = require("./routes/rutasEspecialidades")
const rutasIndex = require("./routes/rutasIndex")
const rutasMedicos= require("./routes/rutasMedicos")


//donde guardo el css y las img
app.use(express.static("./public"));

//nos permite procesar los form  
app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs");


app.use("/", rutasIndex)

app.use("/especialidades", rutasEspecialidades)

app.use("/medicos", rutasMedicos)

app.listen(3001,()=>{
    console.log ("servidor funcionando")
}) 



