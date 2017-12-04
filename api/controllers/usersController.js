const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcryot = require('bcrypt');
const User = mongoose.model('User');

exports.register = async (req, res) => {
    try {

    } catch(err) {
        res.status(400).send(err.message);
    }
};

exports.signIn = async (req, res) => {
    try {

    } catch(err) {
        res.status(400).send(err.message);
    }
};

exports.loginRequired = async (req, res, next) => {
    try {

    } catch(err) {
        res.status(400).send(err.message);
    }
};