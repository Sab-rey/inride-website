const mongoose = require('mongoose');
const User = require('./models/User');
const Ride = require('./models/Ride');
const Destination = require('./models/Destination');
const Estimate = require('./models/Estimate');

// Fonction pour se connecter à la base de données
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/RideDb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connecté à RideDb');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
        process.exit(1);
    }
};

// Fonction pour créer des données exemple
const createData = async () => {
    await connectDB(); // Connexion à la base de données

    // Exemple de création d'un utilisateur
    const user = new User({
        nom: 'John Doe',
        email: 'john@example.com',
        motDePasse: 'password123',
        telephone: '1234567890',
        langue: 'fr',
    });
    await user.save();
    console.log('Utilisateur créé:', user);

    // Exemple de création d'une destination
    const destination = new Destination({
        nom: 'Mon Restaurant Favori',
        adresse: '789 Rue C',
        description: 'Un restaurant agréable.',
    });
    await destination.save();
    console.log('Destination créée:', destination);

    // Exemple de création d'une estimation
    const estimate = new Estimate({
        pointDeDepart: '123 Rue A',
        destination: '456 Rue B',
        prixEstime: 20,
    });
    await estimate.save();
    console.log('Estimation créée:', estimate);

    // Exemple de création d'une course
    const ride = new Ride({
        utilisateurId: user._id, // Utiliser l'ID de l'utilisateur créé
        pointDeDepart: '123 Rue A',
        destination: '456 Rue B',
        prixEstime: estimate.prixEstime, // L'estimation précédemment créée
    });
    await ride.save();
    console.log('Course créée:', ride);
};

// Lancer la création des données
createData().then(() => {
    mongoose.connection.close(); // Fermer la connexion à la base de données
});
