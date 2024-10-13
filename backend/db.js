const mongoose = require('mongoose');

// Fonction pour connecter à la base de données MongoDB
const connectDB = async () => {
    try {
        // Remplacer 'uber-app' par 'RideDb'
        await mongoose.connect('mongodb://localhost/RideDb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connecté à RideDb');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
        process.exit(1); // Arrêter le processus en cas d'erreur
    }
};

module.exports = connectDB; // Exporter la fonction de connexion

