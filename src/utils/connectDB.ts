import mongoose from "mongoose"

const MONGO_URL = 'mongodb+srv://aamilshafi13:OUHQh9mGPghwNOT7@cluster0.qvkns0q.mongodb.net/menu?retryWrites=true&w=majority'

export const ConnectDB = async()=>{
    try {
        const connect = await mongoose.connect(MONGO_URL)
        console.log(`Mongo connected on ${connect.connection.host}`);
        
    } catch (error) {
        console.log("Mongo Error",error);
        
    }
}