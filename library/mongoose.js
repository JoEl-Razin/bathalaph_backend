import mongoose from 'mongoose'

export async function start(uri){
  await mongoose.connect(uri, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function stop(){
  await mongoose.disconnect();
}

export const { connection } = mongoose;