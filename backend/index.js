const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express()
const dotenv = require("dotenv");
const routes = require("./route/routes")
app.use(bodyParser.json())
app.use(cors({ origin : "*" }))
dotenv.config();
app.use(cors({
    origin : "*"
}))
app.use(bodyParser.json());
app.use(routes)

const port = process.env.PORT
const password = process.env.PASSWORD
const userName = process.env.USERNAME

app.get("/", (req, res)=> {
    res.send("hello from login /")
})

app.listen(port, async () => {
    try {
        mongoose.set("strictQuery", true);
        const dbConnection = await mongoose.connect(`mongodb+srv://omkrpatil117:${password}@cluster0.ommoz2l.mongodb.net/student?retryWrites=true&w=majority`);
        console.log("Connected to", port, userName);
    } catch (e) {
        console.log("Errro has occured");
    }
})