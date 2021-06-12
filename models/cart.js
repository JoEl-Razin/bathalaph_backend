import mongoose from 'mongoose'

const cartSchema = mongoose.Schema({
  name: String,
  quantity: String,
  price: Number,
  image: String,
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart