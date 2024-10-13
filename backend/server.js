const express = require('express');
const connectDB = require('./db'); // Importer la fonction de connexion à la base de données
const app = express();

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Connexion à la base de données MongoDB
connectDB(); // Appeler la fonction de connexion

// Importation des routes d'authentification
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Importation des routes de gestion des courses
const rideRoutes = require('./routes/ride');
app.use('/api/ride', rideRoutes);

// Importation des routes de destinations
const destinationRoutes = require('./routes/destination');
app.use('/api/destination', destinationRoutes);

// Importation des routes d'estimation de prix
const estimateRoutes = require('./routes/estimate');
app.use('/api/estimate', estimateRoutes);

// Importation des routes pour gérer les demandes de course
const requestRoutes = require('./routes/request');
app.use('/api/request', requestRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000; // Permet d'utiliser un port défini par l'environnement si disponible
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
