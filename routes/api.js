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

//delete
/*
router.get('/borrar/:id', (req, res, next)=>{
    const getId = mongojs.ObjectId(req.params.id);
    db.tasks.delete({_id: getId}, (err, task) => {
        err ? res.send(err) : res.json(task);
    });
});*/

module.exports = router;