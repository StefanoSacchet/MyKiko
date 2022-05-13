const express = require('express');
const router = express.Router();
const User = require('./models/user'); // get our mongoose model
const { exists } = require('./models/user');

router.post('', async function(req, res){

    // Search the user
	let user = await User.findOne({
		email: req.body.email
	}).exec();

    //User found
    if(user){
        res.json({ success: false, message: 'Registration failed. User already subscribed.' });
    }else{

        new User({
            email: req.body.email,
            password: req.body.password
        }).save();

        //Check subscription
        user = User.findOne({
            email: req.body.email
        }).exec();

        if(user){
            res.json({
                success: true,
                message: 'User subscribed',
                email: user.email,
                id: user._id,
                self: "api/v1/" + user._id /*non so perché restituisce undefined*/
            });
        }else{
            res.json({success: false, message: 'Registration failed.'})
        } 
    }
});

module.exports = router;