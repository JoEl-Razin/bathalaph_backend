import express from 'express';

import {
  getProduct,
  createUser,
  updateProduct,
  deleteProduct,
} from '../controllers/product.js'

const router = express.Router()

router.get('/', getProduct)
router.post('/', createUser)
router.patch('/', updateProduct)
router.delete('/', deleteProduct)

export default router;