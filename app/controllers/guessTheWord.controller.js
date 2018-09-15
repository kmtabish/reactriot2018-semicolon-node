const User = require('../models/guessTheWord.model.js');
var jwt = require('jwt-simple');
const config = require('../constants/config')
exports.User = {
    create : (req, res) => {
        // Validate request
        console.log(req.body)
        if(!req.body) {
            return res.status(400).send({
                message: "User can not be empty"
            });
        }
    
        // Create a Note
        const user = new User({
            uname: req.body.uname || "Untitled", 
            email: req.body.email,
            extraInfo: req.body.extraInfo
        });
    
        const payload = {
            email: req.body.email
        }
        
        // encode

        const token = jwt.encode(payload, config.JWT_SECRET);
        console.log("OOOOOOOO", config.JWT_SECRET, token)


        // Save Note in the database
        user.save()
        .then(data => {
            res.send({data: data, token:token});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    }
}
    