
const express = require("express");
const path= require('path');

const mainController = {
    home: (req, res) => {
            res.sendFile(path.resolve(__dirname, '../views/home.html'))
    },
   register: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    },
    
    login: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/login.html'))
    },
    productDetail: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
    },
    productCart: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    },
    products: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/products.html'))
    }
}


module.exports= mainController;