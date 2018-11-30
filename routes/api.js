const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://Carlos:Newton1@ds121624.mlab.com:21624/magma_tasks', ['tasks']);

//Get all tasks
router.get('/tareas', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get single task
router.get('/tarea/:id', (req, res, next)=>{

});


module.exports = router;