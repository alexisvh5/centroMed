
     const medicosController={
medicos:(req,res)=>{

    const nombresMedicos =[
        {
            nombre:"dr hilo",
        universidad:"UBA",
        antiguedad:"7 a"
    },
    {nombre:"dr garcia",
    universidad:"U.Pontificia",
    antiguedad:"2 a"
},   
{nombre:"dr Caixedo",
universidad:"Unlam",
antiguedad:"13 a"
}];

   return res.render("medicos",{"medicos":nombresMedicos})
}
     }
     module.exports=medicosController