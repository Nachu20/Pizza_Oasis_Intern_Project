const UserModel = require('./regModel.js'); // Import your user model

const signinUserControllerFn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database with the provided email and password
    const user = await UserModel.findOne({ email, password });

    if (user) {
      // User found, authentication successful
      res.status(200).json({ message: 'Login successful' });
    } else {
      // User not found or invalid credentials
      res.status(401).json({ message: 'Login failed. Invalid credentials.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signinUserControllerFn };
