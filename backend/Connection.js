var mongoose=require("mongoose")

async function Connection()
{
 await mongoose.connect("mongodb://localhost:27017/flipkart")

 console.log("connected to mongodb");
 
}
module.exports=Connection