const express = require('express');

const app = express();

app.get("/" ,(req,res)=>{
    res.sendFile("Working !")
})




app.listen(8080,()=>{
    console.log("connected to the server with port 8080")
})