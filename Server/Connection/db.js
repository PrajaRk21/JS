const mongoose = require("mongoose")
const db= "mongodb+srv://rajgauravprajapati212001:21200100@cluster0.gotdo.mongodb.net/Royal retryWrites=true&w=majority&appName=Cluster0"
 
mongoose.connect(db,{
    useNewurlParser:true,
    useUnifiedTopology:true,
 })
 .then(()=>console.log("connection start"))
 .catch((error)=>console.log(error.message))
