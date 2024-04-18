import axios from 'axios';

const createContact = async (contactData) => {
  try {
    const response = await axios.post('http://localhost:3001/contacts', contactData);
    return response.data; // Si vous voulez utiliser les données retournées après la création du contact
  } catch (error) {
    console.error('Erreur lors de la création du contact:', error);
    throw error; // Vous pouvez gérer l'erreur dans le composant appelant
  }
};

export { createContact };
