const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination'); // Chemin d'accès au modèle Destination

// Route pour créer une destination
router.post('/', async (req, res) => {
    try {
        const destination = new Destination(req.body);
        await destination.save();
        res.status(201).send(destination);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Route pour obtenir toutes les destinations
router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).send(destinations);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
