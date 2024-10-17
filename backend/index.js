var Connection=require("./Connection")
var mongoose=require("mongoose")
var express=require("express")
var cors=require("cors")
var app=express()
app.use(express.json())
app.use(cors())

var productSchema= mongoose.Schema
({
    Name:String,
    Phone:Number,
    City:String
})
var result = new mongoose.model("employes",productSchema)

Connection()

app.post("/Save",async function(req,resp)
{
   var data=await result.create(req.body)
   resp.send(data);
})

app.get("/Show",async function (req,resp)
 {
    var data= await result.find()
    resp.send(data);
})

app.delete("/Delete",async function(req,resp)
{
    var data=await result.deleteOne({_id:req.body.id})
    resp.send(data);
})

app.delete("/DeleteAll", async function(req,resp)
{
    var data= await result.deleteMany({})
    resp.send(data);
})

app.put("/Update",async function(req,resp)
{
    var data=await result.updateOne({_id:req.body.id},{$set:req.body.data})
    resp.send(data);
})

app.listen(3030)