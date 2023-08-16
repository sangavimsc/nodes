// const  a  = require('express');

// let app = a();
//   app.set('view engine','ejs'); 
// let array =['on1','two','three'];
// let a1 ='sangavi'
let express=require("express")
let app =express()
app.set('view engine','ejs')
let pname=[ ];
//npm
let body=require('body-parser');
app.use(express.static('public'))
app.use(body.urlencoded({extended:true}));
// for action
app.post('/',(req,res)=>{
  // res.send("<h1> data added </h1>")
  pname.push(req.body.uname);
  res.redirect('/')
})
app.get('/',(req,res)=>{
  res.render('home',{pname:pname});
}).listen(600,()=>console.log('running'));