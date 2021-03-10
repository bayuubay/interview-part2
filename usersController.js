const router=require('express').Router()

module.exports =  function mainApp(){
    router.get('/',(req,res)=>{
        res.json({message:"success get data user"})
    })
   return router
}


