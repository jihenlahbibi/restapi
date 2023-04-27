
const user=require('../models/usermodel');


//ques1: create
exports.createuser= async(req,res)=>{
 try {
    const newUser = await user.create(req.body)
    res.status(200).json({mg:'user created',newUser})
 } catch (err) {
    res.status(500).json({msg:"user not created"})
 }
}
//quest2:get
exports.alluser= async(req,res)=>{
    try {
       const allsUser = await user.find(req.body)
       res.status(200).json({mg:'all users',allsUser})
    } catch (err) {
       res.status(500).json({msg:"error"})
    }
   }
   //ques3 : update
   exports.updateuser= async(req,res)=>{
    try {
        const {id} = req.params;
       const updtUser = await user.findByIdAndUpdate({_id:id},{...req.body},{new:true})
       res.status(200).json({mg:'user updated',updtUser})
    } catch (err) {
       res.status(500).json({msg:"error"})
    }
   }
//ques 4:delete
exports.removeuser= async(req,res)=>{
    try {
        const {id} = req.params;
       const removedUser = await user.findByIdAndRemove({_id:id});
       res.status(200).json({mg:'user removed !',removedUser})
    } catch (err) {
       res.status(500).json({msg:"error"})
    }
   }
