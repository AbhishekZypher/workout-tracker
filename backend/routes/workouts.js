const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Get all routes' });
});

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'Get a single workout' });
});

// POST a new workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
});

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete a workout' })
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'Update a workout' })
});

module.exports = router;