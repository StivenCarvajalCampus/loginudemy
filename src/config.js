const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

module.exports = async function conex() {
  try {
    const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.bzjkog5.mongodb.net/${process.env.ATLAS_DB}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(uri, options);
    return client.db();
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
