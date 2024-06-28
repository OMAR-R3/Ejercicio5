const rutas = require("express").Router();
/*var nombre="Edgar Allan Poe";
var profesion="Escritor";
var categoria="Terror";*/

var datos={
    nombre:"Edgar Allan Poe",
    profesion:"Escritor",
    categoria:"Terror",
    telefonos:{
        tel1:"4522594857",
        tel2:"2031456984"
    },
    correos:{
        correo1:"edgar@gmail.com"
    }
}

rutas.get("/",(req,res)=>{
    res.render("inicio",datos)
});

rutas.get("/acercade",(req,res)=>{
    res.render("acercade");
});

rutas.get("/formulario",(req,res)=>{
    res.render("formulario");
});

rutas.get("/escritor/:id/:nombre",(req,res)=>{

    res.render("escritor",req.params);
});

rutas.post("/recibeDatos",(req,res)=>{
    res.render("usuario", req.body);
});
module.exports=rutas;
