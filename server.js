const express = require("express");
const app=express();
const port =3000;
app.use(express.json());
module.exports=app;


var users= ["Adobe","Google"];

app.post("/add",(req,res)=>{
    let data=req.body;
    users.push(data.username);
    res.send({messagebody:data.username});
});


app.get("/getallusers",(req,res)=>{
    res.send({userlist:users});
});
app.get("/findby/:id",(req,res)=>{
        let userid=req.params.id;
        res.send({user:users[userid]})
});

app.put("/update/:id",(req,res)=>{
    let userid=req.params.id;
    let data=req.body;
    users[userid]=data.username;

    res.send({
        message:"User has been updated"
    });
});


app.delete("/delete/:id",(req,res)=>{
    let userid=req.params.id;
    users = users.filter(item=> {
        return item !==users[userid];
    });
    res.send({
        userid:userid,
        message:"user has been deleted"
    })
});


require("./another");


app.listen(port,()=>{
    console.log("Server is running port 3000");
});