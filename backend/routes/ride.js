// routes/ride.js
const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

// Créer une nouvelle demande de course
router.post('/', async (req, res) => {
    try {
        const ride = new Ride(req.body);
        await ride.save();
        res.status(201).send(ride);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtenir toutes les courses
router.get('/', async (req, res) => {
    try {
        const rides = await Ride.find();
        res.status(200).send(rides);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Autres routes comme PUT, DELETE peuvent être ajoutées ici

module.exports = router;
