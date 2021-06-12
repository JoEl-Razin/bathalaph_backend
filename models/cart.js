import mongoose from 'mongoose'

const cartSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  image: String,
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart