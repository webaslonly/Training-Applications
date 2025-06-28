const express = require('express');
const { model } = require('mongoose');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/get', userController.getUser);
router.post('/create', userController.createUser);

module.exports = router;