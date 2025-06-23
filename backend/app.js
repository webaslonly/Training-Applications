const express = require('express');
require('dotenv').config();
const { default: mongoose } = require('mongoose');

const app = express();

const PORT = process.env.NEXT_PORT

app.use('/api/user', require('./routes/user.route'))
// app.use('/api/card', require('./routes/card.route'))

// Connect to MongoDB

const connectDB = () => {
    try {
        mongoose
            .connect(process.env.NEXT_DB_URL)
            .then(() => console.log('MongoDB connec'));
        app.listen(PORT, () =>
            console.log(`Listen on port -- http://localhost:${PORT}`)
        );
    } catch (error) {
        console.log('MongoDB connection error:', error)
    }
};

connectDB();