const express = require('express');
const router = express.Router();
const upload = require('./multerConfig');

// Route pour gérer le téléchargement d'une seule image
router.post('/', upload.single('image'), (req, res) => {
  // Ici, vous pouvez traiter le fichier téléchargé
  // et mettre à jour la base de données JSON avec le chemin de l'image
  res.send('Image uploaded successfully');
});

module.exports = router;
