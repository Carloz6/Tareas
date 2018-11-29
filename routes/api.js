const express = require('express');
const router = express.Router();

router.get('/tasks', function(req, res, next){
    res.send("tasks page");
    console.log('test');
});

module.exports = router;