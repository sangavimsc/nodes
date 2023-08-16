// let ex = require('express')
// let app= ex();
// app.get('/',(req,res)=>{
//     res.send('<h1>hii</h1>')
// })
// app.get('/a',(req,res)=>{
//     res.send("home")
// })
// app.listen(700,()=>console.log("running"))

let ex = require('express')
let fs=require('fs')
let app= ex();
// app.get('/',(req,res)=>{
//     res.send('<h1>hloo</h1>')
// })
app.get('/',(req,res)=>{
    fs.readFile('home.js',function(err,data) {
        res.write(data);
    });
    });


    // app.get('/a',(req,res)=>{
    //     fs.readFile('about.js',function(data) {
    //  res.write(data);
    //     });
        // app.get('/a',(req,res)=>{
        //     fs.readFile("about.js",function(data){
        //         res.write(data);
        //     })
        // })
        app.use((req,res,next)=>{
            res.status(404).send(
                '<Image src= https://miro.medium.com/v2/resize:fit:1400/1*zE2qnVTJehut7B8P2aMn3A.gif     "width="100%"  height="80%" ></Image>')
        })
    

// app.get('/about',(req,res)=>{
//     res.send("hlo")
// })

app.listen(700,()=>console.log("running"))