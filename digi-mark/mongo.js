const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://naveenelangovan16:naveen162313@cluster0.iqieybg.mongodb.net/form")
.then (()=> {
    console.log("server connected");
})
.catch(()=> {
    console.log("connection failed");
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection