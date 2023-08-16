const http =require('http');
var fs =require('fs');

http.createServer(function (req,res)
{
    fs.readFile('./html.js',function()
    {
        res.write(data);
        res.end();
    
    }) ;
 }).listen(1000); 
