const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    motDePasse: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    langue: {
        type: String,
        default: 'fr', // Français par défaut
    },
    dateInscription: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);
