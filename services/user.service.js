const UserModel = require('../models/user.model');

class UserService {


    async getUser() {
        const users = await UserModel.find();

        return users;
    }


    async createUser(user) {
        const newUser = await UserModel.create(user);

        return newUser;
    }

    async deleteUser(id) {
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            throw new Error("User not found");
        }

        return deletedUser;
    }

    async updateUser(id, user) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });

        if (!updatedUser) {
            throw new Error('User not found');
        }

        return updatedUser;
    }
}

module.exports = new UserService();