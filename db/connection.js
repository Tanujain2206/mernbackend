import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://tanujain:tanu1234@bloging1.tj8eege.mongodb.net/")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
