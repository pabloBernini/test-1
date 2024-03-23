const express = require("express")
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

/// GET all workouts

router.get('/', getWorkouts)

///GET single workout

router.get('/:id', getWorkout)


///POST a new workout

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

   ///export
module.exports = router