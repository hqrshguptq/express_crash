const express=require('express')
const router=express.Router();
const members=require('../../Member');
const uuid= require('uuid');



//all mem
router.get('/',(req,res)=>{
   res.json(members);
        //res.redirect('/')
})

//create mem
router.post('/',(req,res)=>{
    const newMember={
        id: uuid.v4(),
        name:req.body.name,
        status:'active'
    }

    if (!newMember.name){
        return res.status(400).json({msg:'pls include name'})
    }
    members.push(newMember);
   //res.json(members);
  res.redirect('/')
})



module.exports=router;