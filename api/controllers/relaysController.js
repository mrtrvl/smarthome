const mongoose = require('mongoose');
const Relay = mongoose.model('Relay');

exports.allRelays = async (req, res) => {
    try {
        const relays = await Relay.find({});
        if (!relays) {
            throw new Error ('No relays found!');
        }
        res.status(200).send(relays);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.allRelaysInPlace = async (req, res) => {
    const placeId = req.params.placeId;
    try {
        const relays = await Relay.find({ _id: placeId });
        if (!relays) {
            throw new Error ('No relays found!');
        }
        res.status(200).send(relays);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.createRelay = (req, res) => {
    try {
        const newRelay = new Relay(req.body);
        const savedRelay = newRelay.save();
        if(!savedRelay) {
            throw new Error('Cannot save relay!');
        }
        res.status(201).send(savedRelay);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getRelay = async (req, res) => {
    try {
        const { relayId } = req.params;
        console.log(`Relay ID: ${ relayId }`)
        const relay = await Relay.findById(relayId);
        if(!relay) {
            throw new Error('No relay found!');
        }
        res.status(200).send(relay);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateRelay = (req, res) => {
    //TODO
    let id = req.params.id;
    res.send(`UpdateRelay id:${id}`);
};

exports.updateRelayState = async (req, res) => {
    try {
        const { relayId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(relayId) || !relayId) {
            throw new Error('No proper id specified!');
        }
        let { switchedOn } = req.body;
        if (!switchedOn) {
            throw new Error('No relay state given!');
        }
        switchedOn = (switchedOn === 'true') ? true : false;
        
        let relay = await Relay.findById(relayId);
        if (!relay) {
            throw new Error('No relay found!');
        }
        if (relay.switchedOn !== switchedOn) {
            relay.switchedOn = switchedOn;
            relay.switchedDate = Date.now();
            await relay.save();
            res.status(200).send(relay);
        } else {
            res.status(200).send('There is no need to update relay state!');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}
