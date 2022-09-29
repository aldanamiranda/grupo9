const express = require("express");
const path= require('path');
const mainRouter = require ('..src/routers/main.js')

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/', mainRouter);

app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3030, ()=>{
    console.log ('servidor corriendo en puerto 3030')
})

