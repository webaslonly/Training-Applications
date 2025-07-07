const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.get('/get', userController.getUser);
router.post('/create', userController.createUser);
router.delete('/delete/:id', userController.deleteUser);
router.put('/update/:id', userController.updateUser);

module.exports = router;