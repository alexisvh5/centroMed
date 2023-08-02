
     const medicosController={
medicos:(req,res)=>{

    const nombresMedicos =[
        {
            nombre:"dr hilo",
        universidad:"UBA",
        antiguedad:"3 a"
    },
    {nombre:"dr garcia",
    universidad:"U.Pontificia",
    antiguedad:"3 a"
},   
{nombre:"dr Caixedo",
universidad:"Unlam",
antiguedad:"3 a"
}];

   return res.render("medicos",{"medicos":nombresMedicos})
}
     }
     module.exports=medicosController