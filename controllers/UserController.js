const User = require('../models/User');

const isString = require('../utils/testString');

const deleteUser = async (req, res) => {
  try {
    const userToDelete = await User.deleteOne({ _id: req.params.id });

    res.status(200).json({
      message: 'User deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  try {
    if (isString(req.body.password)) {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      const result = await user.save();

      return res.send({ message: 'User created' });
    } else {
      throw new Error('Password must be a string');
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  deleteUser,
  registerUser,
};
