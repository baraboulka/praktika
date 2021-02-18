import express from "express";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";

import router from "./router/timetable"; 

const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const database = "mongodb://localhost:27017/timetable";

mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true});

const { connection } = mongoose;

connection.once("open", () => {
  console.log("Connected to database successfully!");
});

app.use("/", router);

app.listen(3001, () => console.log("Listening on port 3001"));
