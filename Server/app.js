const express=require('express') 
require("./Connection/db.js");
const products = require("./Model/royal.js")
const data = require("./Default/default.js")


const cors = require('cors');
const royals = require('./Model/royal.js');
app.use(express.json())
app.use(cors())

const app=express() 

app.get('/home',async(req,res)=>{ 
    await Add.find()
    .then((user)=>res.json(user))
    .catch((e)=>res.json(e));
res.send("hello world") 
}) ;

app.get("/getroyals",async(req,res)=>{
    
        try{
            const data = await royals.find({}) 
            res.json(data) 
        }catch(err){ 
            res.json(err) 
        }
    }
    )
 
 
app.listen(7000,()=>{ 
    console.log("server run at http://localhost:7000"); 
});
data();