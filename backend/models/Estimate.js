const mongoose = require('mongoose');

const estimateSchema = new mongoose.Schema({
    pointDeDepart: { type: String, required: true },
    destination: { type: String, required: true },
    prixEstime: { type: Number, required: true },
});

module.exports = mongoose.model('Estimate', estimateSchema);
