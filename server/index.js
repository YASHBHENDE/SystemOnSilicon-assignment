const express = require("express");
const bodyparser = require("body-parser");
const app =  express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(request,response){
    response.send("hello yash");

});

app.post("/post",function(req,res){
    const userName = res.body.username;
    const PassWord = res.body.Password;
    console.log(userName);
    console.log(PassWord);
    
});

app.listen(3001, function(){
    console.log("server started on 3001");
});