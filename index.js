import { Server } from 'http'
import * as mongoose from './library/mongoose.js'
import express from 'express'
import cors from 'cors'

import login from './routes/login.js'
import user from './routes/user.js'
import product from './routes/product.js'
import cart from './routes/cart.js'

const CONNECTION_URL = 'mongodb+srv://bathalaph:bathalaph@cluster0.ytjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

let server;

export async function start(port) {
  const PORT = process.env.PORT || port || 4000

  const app = express();
  app.use(express.urlencoded({ extended: true}));
  app.use(express.json())
  app.use(cors());

  // routers
  app.use('/user', user)
  app.use('/login', login)
  app.use('/product', product)
  app.use('/cart', cart)


  await mongoose.start(CONNECTION_URL);
  server = app.listen(PORT);

  console.log(`Server running on port: ${PORT}`);

  return server
}

export async function stop() {
  if(server){
    Promise.all([
      server.close(),
      mongoose.stop(),
    ]);
  }
}