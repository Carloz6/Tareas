const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://Carlos:Newton1@ds121624.mlab.com:21624/magma_tasks', ['tasks']);

//Get all tasks
router.get('/tareas', (req, res, next) => {
    db.tasks.find({},(err, tasks) => {
        err ? res.send(err) : res.json(tasks);
    });
});

//Get single task
router.get('/tarea/:id', (req, res, next)=>{
    const getId = mongojs.ObjectId(req.params.id);
    console.log(getId);
    db.tasks.find({_id: getId}, (err, task) => {
        err ? res.send(err) : res.json(task);
    });
});

//Add new task
router.post('/addTask', (req, res, next)=>{
    const obj = req.body; //object received 
    db.tasks.insert(obj, (err, task) => {
        err ? res.send(err) : res.json(task);
    });
});

//Delete task
router.delete('/borrarTask/:id', (req, res, next)=>{
    const getId = mongojs.ObjectId(req.params.id);
    db.tasks.remove({_id: getId}, (err, task) => {
        err ? res.send(err) : res.json(task);
    });
});

//Update task
router.put('/updateTask/:id', (req, res, next)=>{
    const obj = req.body; 
    const updTask = {};

    if(obj.completado){
        updTask.completado = obj.completado; 
    }
    if(obj.name){
        updTask.name = obj.name;
    } 
    if(!updTask){
        res.status(400);
        res.json({
            "error" : "Datos Incorrectos"
        });
    } else {
        const getId = mongojs.ObjectId(req.params.id);
        db.tasks.update({_id: getId},{$set:obj},{}, (err, task) => {
        err ? res.send(err) : res.json(task); });                   
    }
});

module.exports = router;