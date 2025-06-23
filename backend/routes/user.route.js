const express = require('express');
const { model } = require('mongoose');

const router = express.Router();

router.get('/get', async (req, res) => {
    try {
        res.send('Hello from user route');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;