const mongoose =require("mongoose")


// Define the person Schema 


const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    
    },
    work:{
        type:String,
        enums:["chef","waiter","manager"],// has to be one of the  enums 
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }

})



const Person=mongoose.model("person",personSchema)



module.exports =Person
