const express = require('express');
const router = express.Router();

// Route pour demander une course
router.post('/request', (req, res) => {
    const { userId, destination } = req.body;
    // Logique pour traiter la demande de course
    res.status(200).json({ message: 'Demande de course reçue', userId, destination });
});

module.exports = router;
