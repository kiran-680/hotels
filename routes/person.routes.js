const express=require("express")
const Person=require('../models/Person.js')


const router =express.Router()



router.post("/",async(req,res)=>{
    try{
        const data =req.body
        const newPerson=new Person(data)

        const savedPerson=await newPerson.save()
        console.log(savedPerson)
        res.status(200).json(savedPerson)


    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})

    }
    
})



router.get("/",async(req,res)=>{
    try{
        const data =await Person.find()
        console.log(data)
        res.status(200).json(data)


    }catch(err){
        console.log(err)
        res.status(500).json({"error":"Internal Server Error"})

    }
})

router.get("/:workType",async(req,res)=>{
    try {
    const workType=req.params.workType
    if(workType=="chef" || workType==="manager" || workType==="waiter"){
        const response =await Person.find({work:workType})
        console.log("fetched")
        res.status(200).json(response)


        
    }else{
        res.status(404).json({error:"Invalid work type"})
    }
        
    } catch (error) {
        console.log(err)
        res.status(500).json({error:"Invalid Internal Server Error"})
        
    }


})


router.put("/:id",async(req,res)=>{
    try {

        const personID =req.params.id // sent via parameterized  url
        const updatedPersonData=req.body // sent via form data

        const response =await Person.findByIdAndUpdate(personID,updatedPersonData,{
            // define the response  :
            new:true, // Return the updated document 
            runValidators:true //run the mongoose validations
        })

        if(!response){
            return  res.status(404).json({error:"Person Not Found"})
        }

        console.log("data updatd")
        res.status(200).json(response)



        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal Server Error"})

        
    }
})



router.delete("/:id",async(req,res)=>{
    try {
        const personID=req.params.id
        const response =await Person.findByIdAndDelete(personID)
        if(!response){
            return res.status(404).json({"error":"Person not found"})
        }
        console.log("person deleted")
        return res.status(200).json(response)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error"})
        
    }

})






module.exports=router







