

const mongoose=require("mongoose");
function connectDB(){
    const option={useNewUrlParser:true,useUnifiedTopology:true};
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI,option)
    .then(()=>{})
    .catch((e)=>{
    })
}
module.exports = connectDB;