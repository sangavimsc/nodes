const { log } = require('console');
const fs = require('fs');

fs.mkdir('sa',()=>{
    console.log('created');
})

 


// fs.readFile('./a.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

fs.writeFile('./a.txt',"sangavi",(err)=>{
    if(err){
        console.log('writed')  
    }
    })
    fs.appendFile('./a.txt',"saii",()=>{
        if(err){
            console.log('file updated')
        }
    })

// fs.unlink('./del.js',(err)=>{
//     if(err){
//         console.log('file deleted')
//     }
// })


