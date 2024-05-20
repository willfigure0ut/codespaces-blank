const express = require("express")
const mongoose = require("mongoose")
const urlRoute = require("./router/url")

mongoose.connect("mongodb+srv://diwakar:diwakar@cluster0.jmitywq.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log("Error connecting to database")
    console.log(err)
})
const app = express()
app.use(express.json())


app.use("/url", urlRoute)








const PORT = 3000







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})