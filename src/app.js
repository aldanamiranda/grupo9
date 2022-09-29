const express = require("express");
const path= require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(process.env.PORT || 3030, ()=>{
    console.log ('servidor corriendo en puerto 3030')
})
app.use(express.urlencoded({ extended: false }))
