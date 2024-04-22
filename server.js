const app = require('./app')
require("dotenv").config()
const mongoose = require('mongoose')
const port = process.env.PORT

    (async () => {
        await mongoose.connect(process.env.MONDO_URL)
        console.log("connect to mongodb successfully ..");
    })();

app.listen(port, () => {
    console.log("Server running successfully ..");
})