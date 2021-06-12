import express from 'express'
import mongoose from 'mongoose'

import Cart from '../models/cart.js'

const router = express.Router()

export const getCart = async (req, res) => {
  const { id } = req.params

  try{
    const cart = await Cart.findById(id)
    res.status(200).json(cart)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getCarts = async(req, res) => {
  try{
    const cart = await Cart.find()
    res.status(200).json(cart)
  } catch(error) {
    res.status(404).json({message: error.message})
  }
}

export const createCart = async(req,res) => {
  const {
    name,
    quantity,
    price,
    image,
  } = req.body;

  const newCart = new Cart({
    name,
    quantity,
    price,
    image,
  });

  try{
    await newCart.save()
    res.status(201).json(newCart)
  } catch(error){
    res.status(404).json({message: error.message})
  }
}

export const updatedCart = async (req, res) => {
  const { id: _id } = res.params;
  const {
    id,
    name,
    quantity,
    price,
    image
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that ID: ${id}`)

  const updatedCart = {
    id,
    name,
    description,
    quantity,
    price,
    image
  }

  await Cart.findByIdAndUpdate(id, updatedCart, {new: true})

  res.json(updatedCart)
}

export const deleteCart = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Cart.findByIdAndDelete(id)

  res.json({message: 'Item deleted successfully'})
}

export default router