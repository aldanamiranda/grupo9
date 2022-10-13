const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	// Root - Show all products
	home: (req, res) => {
		res.render('products', {products})
	},

	// Detail - Detail from one product
	productDetail: (req, res) => {
		const id = req.params.id;
		const productoEncontrado = products.find (producto => producto.id == id)
		res.render("detail", {producto: productoEncontrado})
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("create")
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {

		let image
		console.log(req.files);
		if (req.files[0] != undefined){
			image= req.files[0].filename
		}else{
			image= 'defult-image.png'
		}

		let newProduct= {
			id: products[products.length -1].id + 1,
			image: image,
			...req.body
		}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));
		res.redirect('/')
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id= req.params.id;
		let productToEdit = products.find(producto=>producto.id==id)
		res.render("edit-form", {productToEdit})
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		let id= req.params.id
		let productToEdit= products.find(producto=>producto.id== id)

		productToEdit={
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};
		let newProducts = products.map(producto=>{
			if (producto.id == productToEdit.id){
				return producto = {...productToEdit};
			}
			return producto;
		})
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ''));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id= req.params.id;
		let finalProducts = products.filter(product=> product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ''))
		res.redirect("/");
	}
};

module.exports = controller;