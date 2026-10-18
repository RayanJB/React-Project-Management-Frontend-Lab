const router = require("express").Router();
const product = require("../models/product");
const mongoose = require('mongoose')

router.post("/",async(req,res)=>{
    try{
const {Title , description , category , price, quantity} = req.body
    const createdProduct =await product.create(req.body)
res.status(201).json(createdProduct)    
    }
    catch(err){
        console.log(err)
    }


})
router.get("/", async (req,res)=>{
const allProduct = await product.find()
res.json(allProduct)

})

router.get('/:productId', async (req,res)=>{
    try{
        const foundProduct = await product.findById(req.params.productId)
        res.json(foundProduct)
    } catch (err) {
    console.log(err);
  }
})

router.put('/:productId',async (req,res)=>{
    try{
        const updatedProduct = await product.findByIdAndUpdate(req.params.productId, req.body, {new:true})
        res.json(updatedProduct)

    }catch(err){
        console.log(err);

    }
})

router.delete('/:productId', async(req,res)=>{
    try{
        const deletedProduct = await product.findByIdAndDelete(req.params.productId)
        res.json(deletedProduct)
    }catch(err){
        console.log(err);
    }
})
module.exports= router
