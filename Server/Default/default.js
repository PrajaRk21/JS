const royals = require("../Model/royal.js")
const royal =require("../Model/royal.js")
const data =require("../data.js")

const data=async()=>{
    await royals.deleteMany({})
    await royals.insertMany(data)
}
module.exports=data