import express from 'express'

import {
  getCart,
  getCarts,
  createCart,
  updatedCart,
  deleteCart,
} from '../controllers/cart.js'

const router = express.Router()

router.get('/:id', getCart)
router.get('/', getCarts)
router.post('/', createCart)
router.patch('/:id', updatedCart)
router.delete('/:id', deleteCart)

export default router;