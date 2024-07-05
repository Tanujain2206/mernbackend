import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://tanu:tanu1234@bloging.jht2oge.mongodb.net//bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
