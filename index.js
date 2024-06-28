const express = require("express");
const rutasUsuarios=require("./routes/usuarios");
const path=require("path");

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use("/", express.static(path.join(__dirname,"web")));
app.use("/",rutasUsuarios);
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});