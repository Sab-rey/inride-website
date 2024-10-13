const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    utilisateurId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dateDemande: {
        type: Date,
        default: Date.now,
    },
    dateDebut: Date,
    dateFin: Date,
    pointDeDepart: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    prixEstime: {
        type: Number,
        required: true,
    },
    statut: {
        type: String,
        enum: ['en attente', 'en cours', 'terminé'],
        default: 'en attente',
    },
});

module.exports = mongoose.model('Ride', rideSchema);
