    var express = require('express');
    const router = express.Router();
    const user = require('../controllers/user.controller');
    router.get('/test', (req,res) => { 
      res.json('Hello world');
    });

    router.post('/enterUserDetails', user.create);
    router.get('/findUserDetails/:name',user.find);
    router.get('/findAllUsers',user.findAll);
 
    module.exports = router; 

    
