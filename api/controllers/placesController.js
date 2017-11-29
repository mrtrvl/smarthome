const mongoose = require('mongoose');
const Place = mongoose.model('Place');

exports.allPlaces = async (req, res) => {
    
    try {
        const places = await Place.find({});
        res.status(200).send(places);
    } catch (err) {
        res.status(400).send(err);
    } 
};

exports.createPlace = async (req, res) => {
    try {
        const {name, description} = req.body;

        if(!name || !description){
            throw new Error('Name or description is missing!');
        }

        const place = await Place.findOne({ name: name });
        if (place) {
            throw new Error(`Place ${ name } already exists`);
        }

        const newPlace = new Place({name, description});
        await newPlace.save();
        res.status(210).send(newPlace);

    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getPlace = async (req, res) => {

    try {
        const { placeId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(placeId)) {
            throw new Error('No proper place id specified!');
        }

        const place = await Place.findById(placeId);
        if(!place) {
            throw new Error('No place found!');
        }
        res.status(200).send(place);

    } catch (err){
        res.status(400).send(err.message);
    }
};

exports.updatePlace = async (req, res) => {

    try {
        const { placeId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(placeId) || !placeId) {
            throw new Error('No proper id specified!');
        }

        const  { name, description, ipAddress, diskSize, diskFree } = req.body;

        let placeToUpdate = await Place.findById(placeId);
        if (!placeToUpdate) {
            throw new Error(`Place with id: ${ placeId } not found!`);
        }

        placeToUpdate.name = name || placeToUpdate.name;
        placeToUpdate.description = description || placeToUpdate.description;
        placeToUpdate.ipAddress = ipAddress || placeToUpdate.ipAddress;
        placeToUpdate.diskSize = diskSize || placeToUpdate.diskSize;
        placeToUpdate.diskFree = diskFree || placeToUpdate.diskFree;
        placeToUpdate.updatedDate = Date.now();

        await placeToUpdate.save();

        res.status(210).send(placeToUpdate);

    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
};
