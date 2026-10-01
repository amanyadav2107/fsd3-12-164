import express from "express";

const app = express();

app.get("/",(req, res)=>{
    // res.send("Hello Express");
    // res.send("<h1>Hello Express</h1>");
res.send(`
    <h1>Hello Server</h1>
    <h2>I am responding from express framework</h2>
    <h3> The code is minimal amd easy to reurn </h3>
    `);    
});

app.get('/about',(req,res)=>{
    res.send("<h2>About page</h2>")
})

app.get("/products", (req, res)=>{
    const product ={
        id:1,
        name:"Mobile",
        peice:25000,
    };
    res.send(product)
});


app.listen(4444,()=>console.log("prg1 is running at 4444"));
