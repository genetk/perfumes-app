const mongoose =require ('mongoose');
const User =require('./user')
mongoose.connect('mongodb://localhost:27017/beautySupply',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
});

async function run(){
    try{

const perfumes = await User.create({name:"missdior",brand:"dior",size:30,stock:"available",price:200})
perfumes.save();
console.log(perfumes)
    }
    catch(e){
        console.log("error")
    }
     
}
    run().then(response => {
        console.log("response ", response)
    })
    .catch(error => {
        console.error("error: " + error)
    })
