const { conex } = require('../config.js');

async function getUserCollection() {
  const db = await conex(); // Obtener la instancia de la base de datos
  return db.collection('users'); // Devolver la colección "users"
}

module.exports = getUserCollection;
