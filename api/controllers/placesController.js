'use strict';


exports.allPlaces = (req, res) => {
    res.send('AllPlaces');
};

exports.createaPlace = (req, res) => {
    res.send('CreatePlace')
};

exports.getPlace = (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    res.send(`GetPlace id:${id}`);
};

exports.updatePlace = (req, res) => {
    let id = req.params.id;
    res.send(`UpdatePlace id:${id}`);
};
