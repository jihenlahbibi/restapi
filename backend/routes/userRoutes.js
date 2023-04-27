const epress =require("express");
const  {createuser, alluser,updateuser,removeuser} =require("../controlles/user");

const userRoute= epress.Router();
userRoute.post('/add',createuser);
userRoute.get('/all',alluser);
userRoute.put('/update/:id',updateuser);
userRoute.delete('/delete/:id',removeuser);

module.exports=userRoute;
