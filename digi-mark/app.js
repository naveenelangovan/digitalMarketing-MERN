const express=require("express")
const collection=require("./mongo")
const cors = require('cors')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=> {

})

app.post("/",async(req,res)=> {
    const {name}=req.body
    const {mail}=req.body
    const {msg}=req.body

    const data = {
        name:name,
        mail:mail,
        msg:msg
    }
    
    await collection.insertMany([data])
})

app.listen(8000,()=>{
    console.log("port connected");
})