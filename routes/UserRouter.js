const express = require('express');
const router = express.Router();

const { deleteUser, registerUser } = require('../controllers/UserController');

router.delete('/api/deleteUser/:id', deleteUser);
router.post('/api/registerUser', registerUser);

module.exports = router;
