const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const workoutRoutes = require("./routes/workouts")



///middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

///routes
app.use('/api/workouts', workoutRoutes)

//// localhost:4000/api/workouts/xxx

/// database
mongoose.connect(process.env.MONGO_URI)
.then(() => {

        ///listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to database, listening on port", process.env.PORT)
        })

})
.catch((error) => {
    console.log(error)
})