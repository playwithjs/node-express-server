const express = require("express");
const app = express()

//Create Route
app.get('/hello', (req, res) => {
    res.send({message: "Welcome to PlayWithJS"})
})

//Listen server
app.listen(4000, () => {
    console.log("Application running on port 4000")
})