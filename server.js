const express = require("express")
const app = express()
require('dotenv').config()

const PORT = process.env.PORT
const ENVIRONMENT = process.env.NODE_ENV

app.get("/",(req,res) => {
    res.send("We are live 🥳")
})

app.listen(PORT,()=> {
    console.log("Server listening on PORT",PORT, "Environment",ENVIRONMENT)
})