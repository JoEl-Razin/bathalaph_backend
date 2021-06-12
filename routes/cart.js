import express from 'express'

import {
  getCart,
  createCart,
  updatedCart,
  deleteCart,
} from '../controllers/cart.js'

const router = express.Router()

router.get('/', getCart)
router.post('/', createCart)
router.patch('/', updatedCart)
router.delete('/', deleteCart)

export default router;