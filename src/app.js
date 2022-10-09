const express = require("express");
const path= require('path');
const mainRouter = require ('./routers/main.js');
const productRouter = require ('./routers/products.js');

const app = express();

app.use(express.static('public'));
app.use('/', mainRouter);
app.set("view engine", 'ejs');
app.get('/', (req, res)=>{
res.render('home')})
//})

//app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3030, ()=>{
    console.log ('servidor corriendo en puerto 3030')
})



