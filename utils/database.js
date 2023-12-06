import { mongoose } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery');

    if (isConnected){
        console.log('MongoDB is Already Connected')
    return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
    }catch (err) {
        console.log(err, 'ERROR FROM DB')
    }
}