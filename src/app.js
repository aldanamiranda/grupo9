
//const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');


const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'))


app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

const mainRouter = require ('./routers/main');
const productsRouter = require ('./routers/products');

app.use('/', mainRouter);
app.use ('/products', productsRouter)

app.get('/', (req, res)=>{
res.render('home')})
//})

app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3030, ()=>{
    console.log ('servidor corriendo en puerto 3030')
})



