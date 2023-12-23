const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts);
}

// get single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Workout' });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
}

// create new workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, load, reps });
        console.log(req.body)
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Workout' });
    }
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
        return res.status(404).json({ error: "Workout not found!" })
    }
    res.status(200).json('Workout deleted successfully')
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Workout' });
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, { new: true });
    if (!workout) {
        return res.status(404).json({ error: "Workout not found!" })
    }
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}