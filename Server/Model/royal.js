const mongoose = require('mongoose')
const Schema =new mongoose.Schema({
    id:String,
    name:String,
    price:String,
    category:String,

});
const royals= mongoose.model("royal",Schema);
module.exports= royals;