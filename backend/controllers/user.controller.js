const UserModel = require('../models/user.model');

class UserController {
  async getUser(req, res) {
    try {
      res.status(200).send("Hello from user route");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async createUser(req, res) {
    try {
        const { Name, lastName, email, password } = req.body;
        // Validate the request body
        if (!Name || !lastName || !email || !password) {
            return res.status(400).send('All fields are required')
        }
        await UserModel.create(req.body);
        res.status(201).send(`User ${Name} ${lastName} created successfully`)
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new UserController();