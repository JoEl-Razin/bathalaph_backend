import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/product.js'

const router = express.Router()

export const getProduct = async(req, res) => {
  try{
    const product = await Product.find();
    res.status(200).json(product)
  } catch(error) {
    res.status(404).json({ message: error.message})
  }
}

export const createUser = async(req,res) => {
  const {
    name,
    description,
    quantity,
    price,
    image
  } = req.body;

  const newProduct = new Product({
    name,
    description,
    quantity,
    price,
    image,
  });

  try{
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch(error){
    res.status(404).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  const { id: _id } = res.params
  const {
    id,
    name,
    description,
    quantity,
    price,
    image
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that ID: ${id}`)

  const updatedProduct = {
    id,
    name,
    description,
    quantity,
    price,
    image
  }

  await Product.findByIdAndUpdate(id, updateProduct, {new: true})

  res.json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Product.findByIdAndRemove(id)

  res.json({ message: 'Item deleted successfully '})
}

export default router