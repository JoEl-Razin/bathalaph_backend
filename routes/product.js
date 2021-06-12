import express from 'express';

import {
  getProduct, 
  getProducts,
  createUser,
  updateProduct,
  deleteProduct,
} from '../controllers/product.js'

const router = express.Router()

router.get('/:id', getProduct)
router.get('/', getProducts)
router.post('/', createUser)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;