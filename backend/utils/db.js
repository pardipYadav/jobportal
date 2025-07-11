import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db connected successfull")
    }catch(err){
        console.log(`Database not connected due to ${err} `)
    }
}
export default connectDb