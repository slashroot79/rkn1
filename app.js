const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("version test")
})

app.get('/t',(req,res)=>{
    res.send("version test endpoint...")
})


app.listen(PORT, ()=>{console.log(`Started server....listening on port : ${PORT}`)})