import express from "express"
import sum from "./sum.js";
const app=express();
const Port=8000


app.get("/",(req,res)=>{
    res.send("helo")
})

app.get("/sum/:a/:b",async(req,res)=>{
    const{a,b}=req.params;
    res.json({ans:sum(parseInt(a),parseInt(b))})
})
app.listen(Port,()=>
{
    console.log(`the server is listning on port ${8000}`)
})