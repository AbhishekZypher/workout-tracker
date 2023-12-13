require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')

const port = process.env.PORT || 5000;

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        // listen for requests
        app.listen(port, (req, res) => {
            console.log(`Connected to DB & Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("Could not connect to database", (err));
    })
