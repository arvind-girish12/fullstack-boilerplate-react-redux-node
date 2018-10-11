const user = require('../models/user.model');

exports.create = (req,res) => {
    console.log(req.body);
    if(!req.body){
        return res.status(404).send({
            message: "user details cannot be empty"
        });
    }

    const User = new user ({
      name: req.body.name,
      age: req.body.age,
      phoneNo: req.body.phoneNo
    });

    User.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
          message: err.message || "some error occured while entering use details."
        });
    });
}

exports.find = (req, res) => {
    
    user.find({"name": req.params.name})
    .then(user => {
        if(!user){
            return res.status(404).send({
               message: "user not found with username " + req.params.name
            });
        }
        res.send(user); 
    }).catch(err => {
        if(err.kind === 'ObjectName'){
            return res.status(404).send({
                message: "user not found with username " + req.params.name
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with username " + req.params.name
        });
    });
};

exports.findAll = (req,res) => {
    user.find()
    .then(users => {
        res.send(users)
    }).catch(err => {
        res.status(404).send({
          message: err.message || "some error occured while retrieving all users"
        });
    });
};
