const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());

let todos = [];
let id = 1;

app.get('/todos',(req, res)=>{
    res.status(200).json(todos)
});

app.post('/todos',(req, res)=>{
    
    const{ title } = req.body;
    const newTodo = {
        id:id++,
        title,
        status: false
    }
    todos.push(newTodo)
    res.status(200).json(todos)
});

app.get('/todos/:id', (req, res) => {
    const idPar = parseInt(req.params.id, 10); // Convert id to a number

    const result = todos.find(t => t.id == idPar);
    console.log(idPar, result);
    
    if (!result) {
        return res.status(404).json({ message: "task not found" });
    }

    return res.status(200).json(result);
});


app.put('/todos/:id',(req,res)=>{
    const todo = todos.find(t=>t.id == req.params.id);
    if(!todo){
        res.status(404).json({error:"not found"})
    }
    const {title,status} = req.body;
    if(!title,!status){
        res.status(404).json({error:"all fields required"});
    }else{
        todo.title = title;
        todo.status=status;
    }

    
    res.status(200).json(todo)
});

app.delete('/todos/:id',(req,res)=>{
    const elem = todos.find(t=>t.id == req.params.id)
    if(!elem){
        return res.status(400).json({message:"task not found"})
    }
    console.log(elem);
    const del = todos.splice(elem,1)
    
    res.status(200).json({message:`deleted successfully`})
});


app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
})