import express from 'express'
import mongoose from 'mongoose'

import User from '../models/user.js'

const router = express.Router()

export const getUser = async (req, res) => {
  const { id } = req.params

  try{
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getUsers = async(req, res) => {
  try{
    const user = await User.find();
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createUser = async(req, res) => {
  const {
    username,
    password
  } = req.body;

  const newUser = new User({
    username,
    password,
  });

  try{
    await newUser.save();
    res.status(201).json(newUser)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { id: _id } = res.params
  const {
    id,
    username,
    password,
  } = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that ID: ${id}`)

  const updatedUser = {
    id,
    username,
    password,
  }

  await User.findByIdAndUpdate(id, updatedItem, {new: true})

  res.json(updatedUser)
}

export const deleteUser = async (req, res) => {
  const {id} = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No pos with id: ${id}`)

  await User.findByIdAndDelete(id)

  res.json({ message: 'Item deleted successfully'})
}

export default router