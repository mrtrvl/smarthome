const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcryot = require('bcrypt');
const User = mongoose.model('User');

exports.register = async (req, res) => {
    try {
        let newUser = new User(req.body);
        newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
        let user = await newUser.save();
        if (!user) {
            throw new Error('Cannot save new user!');
        }
        user.hashPassword = undefined;
        return res.status(201).json(user);

    } catch(err) {
        res.status(400).send(err.message);
    }
};

exports.signIn = async (req, res) => {
    try {
        const user = User.findOne({ email: req.body.email});
        if(!user) {
            throw new Error ('Authentication failed! No user found!');
        } else if (user) {
            if(!user.comparePassword(req.body.password)){
                throw new Error('Authentication failed. Wrong password!');
            }
        } else {
            const payload = { email: user.email, fullname: user.firstName + ' ' + user.lastName, _id: user._id };
            return res.status(200).json({token: jwt.sign(payload, 'password')});
        }

    } catch(err) {
        res.status(401).send(err.message);
    }
};

exports.loginRequired = async (req, res, next) => {
    try {

    } catch(err) {
        res.status(400).send(err.message);
    }
};