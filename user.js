const mongoose =require ('mongoose');

const userschema = new mongoose.Schema({// 
    name:String,
    brandName:String,
    size:Number,
    price:Number,
    stock:String

})

module.exports=mongoose.model("bags", userschema)