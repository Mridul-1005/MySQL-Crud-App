const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

//configure dotenv
dotenv.config();

//rest object
const app = express()

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get('/test',(req,res)=>{
    res.status(200).send("<h1>Nodejs Mysql APP Updated</h1>");
})

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`.bgMagenta.white);
})