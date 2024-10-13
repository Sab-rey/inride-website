const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    adresse: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Destination', destinationSchema);
