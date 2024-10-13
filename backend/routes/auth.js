const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const router = express.Router();

// Inscription de l'utilisateur
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }

    // Créer un nouvel utilisateur
    const newUser = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10), // Hasher le mot de passe
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Retourner l'utilisateur enregistré
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }
});

// Connexion de l'utilisateur
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Générer un token
    const token = jwt.sign({ id: user._id }, 'votre_secret_jwt', { expiresIn: '1h' });
    res.json({ token, userId: user._id });
});

// Route pour obtenir la localisation
router.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    // Logique pour gérer la localisation
    res.status(200).json({ message: 'Localisation reçue', latitude, longitude });
});


module.exports = router; // Exporter les routes
