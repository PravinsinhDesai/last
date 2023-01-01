const express=require('express');

app=express();


app.get('/',(req,res)=>{
    res.sendfile("public/login.html",{root:__dirname})
});

app.listen(3000);