const mongoose = require('mongoose');

// Provide connection to a new in-memory database server.
const connect = async (dbName) => {
  // NOTE: before establishing a new connection close previous
  await mongoose.disconnect();

  const url = `mongodb://telmo:secret@127.0.0.1:27017/node_testing?authSource=admin`;
  await mongoose.connect(url, { useNewUrlParser: true });
};

// Remove and close the database and server.
const close = async () => {
  await mongoose.disconnect();

  console.log('closing db');
};

// Remove all data from collections
const clear = async () => {
  const collections = mongoose.connection.collections;
  console.log('Cleaning.....');
  // console.log(collections);
  for (const key in collections) {
    await collections[key].deleteMany();
  }
};

module.exports = {
  connect,
  close,
  clear,
};
