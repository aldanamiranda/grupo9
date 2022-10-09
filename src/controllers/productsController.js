const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
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
		console.log(req.body)
		res.redirect("/")
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render("edit-form")
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		console.log(req.body);
		res.redirect("/")
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		res.redirect("/")
	}
};

module.exports = productsController;