const express = require('express');
const dotenv = require('dotenv');
const app = express();
const UserRouter = require('./routes/UserRouter');

dotenv.config({ path: './.env' });
const connectDB = require('./config/database');

//Connect Database
connectDB();

//init middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(UserRouter);

module.exports = app;
