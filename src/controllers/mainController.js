

const path= require('path');
const fs= require ('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    home: function (req, res) {
        const destacado = products.filter(producto=> producto.category == "destacado");
        const promo = products.filter(producto=> producto.category == "promo");
        const noDestacado = products.filter(producto=>producto.category == "in-sale");
            res.render('home', {destacado, noDestacado, promo})
    },

    search: (req, res) => {
		const busqueda = req.query.keywords
		const productoABuscar= products.filter(producto=> producto.name.toLoweeCase().includes(busqueda))
		res.render("results", {productoABuscar, busqueda})
	},
};
   //register: (req,res)=>{
     //   res.sendFile(path.resolve(__dirname, '../views/register.html'))
    //},
    
//    login: (req,res)=>{
  //      res.sendFile(path.resolve(__dirname, '../views/login.html'))
//    },
  //  productDetail: (req,res)=>{
    //    res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
//    },
  //  productCart: (req,res)=>{
  //      res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
 //   },
//    products: (req,res)=>{
  //      res.sendFile(path.resolve(__dirname, '../views/products.html'))
  //  }
//} 



module.exports= controller;