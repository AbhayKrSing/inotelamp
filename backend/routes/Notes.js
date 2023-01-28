const express=require('express')
router=express.Router()

router.get('/',(req,res)=>{
    res.json({
        'notes':'learning react JS'
    })
})
module.exports=router