// imports
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";


// declaration and intialilzation
const app=express();
const port=8080



// uses
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))
app.disable('x-powered-by')    // less hackers know about our stack



// routes
app.get('/',(req,res)=>{
    res.status(201).json("Home GET Request");
})

// api routes

app.use('/api',router)

connect().then(()=>{
    try{
        app.listen(port,(err)=>{
            console.log(`Server connected to http://localhost:${port}`);
        })
    }
    catch(err){
        console.log("Cannot connect mongodb");
    }
}).catch(error=>{
    console.log("Invali database connection");
})
