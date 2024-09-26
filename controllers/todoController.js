const express = require("express");

let todos = [];
let nextid = 1;

const getTodos = (req,res)=>{
    res.status(200).json(todos);
}

const getTodo = (req,res)=>{
    const dat = todos.find(t=>t.id==req.params.id)
    if(!dat){
        return res.send(404).json({error:"task not found"})
    }  
    res.status(200).json(dat)
}

const addTodo = (req,res)=>{
    const {task} = req.body;
    const newTodo = {
        id:nextid++,
        task,
        status:"not complete"
    }
    todos.push(newTodo);
    res.status(200).json(todos);
}

const updateTodo = (req,res)=>{
    const dat = todos.find(t=>t.id==req.params.id);
    if(!dat){
        return res.send(404).json({message:"task not found"})
    }
    const {task} = req.body;
    if(!task){
        return res.status(404).send({Error:"all feilds required"});
    }else{
        dat.task = task,
        dat.status = "completed"
    }
    res.status(200).json(dat)
}

const deleteTodo = (req,res)=>{
    const dat = todos.find(t=>t.id == req.params.id);
    if(!dat){
        return res.status(404).json({Error:"task not found"})
    }
    todos.splice(dat,1);
    res.status(200).json({message:"task deleted successfully"})
}

module.exports = {getTodos, getTodo, addTodo, updateTodo, deleteTodo}