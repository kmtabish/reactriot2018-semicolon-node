const User = require('../models/guessTheWord.model.js');

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
    
        // Save Note in the database
        user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    }
}
    