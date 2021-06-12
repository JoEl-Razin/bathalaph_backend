import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
  image: String,
})

const Product = mongoose.model('Product', productSchema)

export default Product