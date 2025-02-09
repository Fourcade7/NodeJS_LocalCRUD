const app=require("./server");


app.get("/another",(req,res)=>{
    let pr=req.query.pr;
    res.send({
        message:"Message from another js",
        query:pr
    });
});






app.use((req,res)=>{
    res.status(404).send({
        message:"404 URL not found"
    });
});