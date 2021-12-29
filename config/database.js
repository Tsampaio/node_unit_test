const mongoose = require('mongoose');
const db = process.env.DATABASE;
console.log(db);
const connectDB = async () => {
  try {
    console.log('trying');
    await mongoose.connect(db);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('failed');
    console.error(error.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
