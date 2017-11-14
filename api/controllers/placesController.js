'use strict';

const mongoose = require('mongoose');
const Place = mongoose.model('Place');

exports.allPlaces = async (req, res) => {
    
    try {
        const places = await Place.find({});
        res.json(places);
    } catch (err) {
        console.error(err);
    } 
};

exports.createPlace = async (req, res) => {

    const newPlace = new Place(req.body);

    try {
        const place = await Place.findOne({ 'name' : newPlace.name });
        if (place) {
            res.send(`Place named "${newPlace.name}" already exists`);
        } else {
            newPlace.save(newPlace);
            res.json(newPlace);
        }
    } catch (err) {
        console.error(err);
    }
};



exports.getPlace = async (req, res) => {

    const placeId = req.params.placeId;

    try {
        const place = Place.findById(placeId);
        res.json(place);
    } catch (err){
        console.error(err);
    }
};


exports.updatePlace = async (req, res) => {

    const placeId = req.params.placeId;
    const updatedPlace = req.body;

    try {
        let placeToUpdate = await Place.findById(placeId);
        if (placeToUpdate) {
            placeToUpdate.name = updatedPlace.name || placeToUpdate.name;
            placeToUpdate.description = updatedPlace.description || placeToUpdate.description;
            placeToUpdate.save(placeToUpdate);
            res.json(placeToUpdate);
        } else {
            res.send(`Place with id: ${placeId} not found!`);
        }
    } catch (err) {
        res.send(`Something wrong happened! :(`);
        console.error(err);
    }
};