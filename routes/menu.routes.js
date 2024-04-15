const express=require("express")
const MenuItem=require("../models/menu.js")
const  router =express.Router()




router.post("/",async(req,res)=>{
    try {
    const data =req.body
    const newMenuItem=new MenuItem(data)
    const savedMenuItem=await newMenuItem.save()
    console.log(savedMenuItem)
    res.status(200).json(savedMenuItem)


    
        
    } catch (error) {
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
        
    }
    

})


router.get("/",async(req,res)=>{
    try {
        
    const data =await MenuItem.find()
    console.log(data)
    res.status(200).json(data)
    } catch (error) {
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})

        
    }

})


router.get("/:taste",async(req,res)=>{
    try {

        const taste=req.params.taste
        if(taste ==="spicy" || taste ==="sour" || taste ==="sweet"){
            const response =await MenuItem.find({taste:taste})
            console.log("taste fetched")
            res.status(200).json(response)

        }else{
            console.log("invalid taste")
            res.status(404).json({error:"Invalid taste type"})
        }
       
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal Server Error "})
        
    }
})

module.exports=router
