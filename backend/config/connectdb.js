const mongoose= require("mongoose");

const connectDB= async()=>{
    await mongoose.connect( 'mongodb+srv://jihenelahbibipro:jiheneMGDB23@jihene.mydblmc.mongodb.net/api', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Database conected");
    })
    .catch(()=>{
        console.log("Database coonection Failed");
    })
}

module.exports= connectDB