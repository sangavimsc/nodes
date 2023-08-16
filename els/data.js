let express= require('express')
let app = express()
app.set('view engine','ejs')
let uname = [ ];
let body=require('body-parser');
app.use(express.static('public'))
app.use(body.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    uname.push(req.body.fname);
  res.redirect('/')
})
app.get('/',(req,res)=>{
    res.render('home',{uname:uname});
  }).listen(600,()=>console.log('running'));
   