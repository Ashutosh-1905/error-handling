const express = require("express");
const app = express();

app.get("/", function(req, res, next){
    try{
        res.send(hey);
    }
    catch{
        next(err);
    }
});

app.get("/about", function(req, res, next){
    res.send("this is about page");
});

// error handler

app.use((err, req, res, next)=>{
    res.status(500).send(err.message);
});

app.listen(3000,()=>{
    console.log("its running");
});