const express = require("express");
const connectdb = require("./config/connectdb");
const app = express();
const userRoute=require("./routes/userRoutes")
const port =5000;


connectdb();
app.use(express.json());
app.use('/api',userRoute);

app.listen(port,(err)=>{
    (err)?console.log(err):console.log(`the server in running at ${port}`)
})
