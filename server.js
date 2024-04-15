const express =require("express")
const db=require("./db.js")





const app=express()


const bodyParser=require("body-parser")
app.use(bodyParser.json())



const personRoutes=require("./routes/person.routes.js")
const menuItemRoutes=require("./routes/menu.routes.js")
app.use("/person",personRoutes)
app.use("/menu",menuItemRoutes)



// endpoints :

app.get("/",function(req,res){
    res.send("welcome to my hotel........ how can i help you ?")
})

app.get("/chiken",(req,res)=>{
    res.send("sure, sir, I would love to serve you ")
})









app.listen(3000)

