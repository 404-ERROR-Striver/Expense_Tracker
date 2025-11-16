import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

async function initDB(){
    try{
        await sql
    }catch(error){
            
    }
}

 app.get("/",(req,res)=>{
        res.send("it is working");
    });

//  console.log("my port:",process.env.port)   


app.listen(PORT,()=>{
    console.log("server is up  and running on PORT:",PORT);
   
});