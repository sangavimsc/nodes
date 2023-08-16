let ex = require("express")
let app=  ex()
app.get("/", (req,res)=>{
    res.send("data")
   
}).listen(200, ()=>console.log("run"))

