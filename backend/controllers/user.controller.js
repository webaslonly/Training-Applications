const UserModel = require('../models/user.model');
const userService = require('../services/user.service');

class UserController {
  async getUser(req, res) {
    try {
      const allUsers = await userService.getUser();
      res.status(200).send(allUsers);
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

      const newUser = await userService.createUser(req.body);

      res.status(201).send(newUser)
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      // Validate the request body
      if (!id) {
        return res.status(400).send('ID is required');
      }

      const deletedUser = await userService.deleteUser(id);

      res.status(200).send(deletedUser);

    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }


  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { Name, lastName, email, password } = req.body;
      if (!id || !Name || !lastName || !email || !password) {
        return res.status(400).send('All fields are required');
      }
      const updatedUser = await userService.updateUser(id, req.body);

      res.status(200).send(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new UserController();