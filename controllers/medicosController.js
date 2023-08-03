
     const medicosController={
medicos:(req,res)=>{

    const nombresMedicos =[
        {
         nombre:"hilo",
        universidad:"UBA",
        antiguedad:"7 a"
    },
    {nombre:"garcia",
    universidad:"U.Pontificia",
    antiguedad:"2 a"
},   
{
nombre:"caixedo",
universidad:"Unlam",
antiguedad:"13 a"
}];

   return res.render("medicos",{"medicos":nombresMedicos})
},
search:(req,res)=>{
    let loQueBuscoElUsuario = req.query.busqueda;
 
    let nombresMedicos =[
        { id:1,
         nombre:"dr hilo",
        universidad:"UBA",
        antiguedad:"7 a",
        especialidad:"alergista",
        img:"/img/caixedo.jpg"
    },
    {
        id:2,
        nombre:"garcia",
    universidad:"U.Pontificia",
    antiguedad:"2 a",
    especialidad:"clinica clinico Clinica Clinico",
    img:"/img/caixedo.jpg"
},   
{
    id:3,
    nombre:"caixedo",
universidad:"Unlam",
antiguedad:"13 a",
especialidad:"odontologia",
img:"/img/caixedo.jpg"
},

{
    id:2,
    nombre:"Bravo",
universidad:"U.Catolica",
antiguedad:"2 a",
especialidad:"clinica clinico Clinica Clinico",
img:"/img/garcia.jpg"
}

];
 
let busquedaResultante= [];
for(let i = 0; i< nombresMedicos.length; i++ ){
    if(nombresMedicos[i].especialidad.includes(loQueBuscoElUsuario)){
        busquedaResultante.push(nombresMedicos[i]);
    }
}

res.render("busquedaMedicos",{busquedaResultante})

}
     }
     module.exports=medicosController