const express = require('express');

const app = express();
const format = require('date-format');
const PORT= 4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log("Hello again from server")
})

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello from get request</h1>")
})

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial = {
            username:"yashshah23",
            followers:66,
            follows: 12,
            date:format.asString("dd[MM] - hh:mm:ss",new Date()),
    }

    res.status(200).json(instaSocial);
})

app.get("/api/v1/facebook",(req,res)=>{
    const facebookSocial={
        username:"yashshah23",
            followers:66,
            follows: 12,
            date:Date.now()
    }

    res.status(200).json(facebookSocial);
})

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token)
    res.status(200).json(req.params.token)
})