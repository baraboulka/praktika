const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const ObjectId = require("mongodb").ObjectID;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const database = "mongodb://localhost:27017/server1";

const connectionEstablished = (err, client) => {
  try {
    db = client.db();
    console.log("Connected to database!");
    app.listen(3000, console.log("Listening on port 3000"));
  } catch {
    console.log(err);
  }
};

mongodb.MongoClient.connect(
  database,
  { useNewUrlParser: true, useUnifiedTopology: true },
  connectionEstablished
);

//ACCESS TO MAIN WEBSITE
app.get("/", (req, res) => {
  res.send("Welcome to server!");
});

//ACCESS TO USERS
app.get("/users", (req, res) => {
  db.collection("users")
    .find()
    .toArray(function (e, items) {
      if (e) {
        res.status(400).json({ message: e });
      } else {
        res.send(items);
      }
    });
});

//CREATE NEW USER
app.post("/users", (req, res) => {
  try {
    console.log(req.body);
    const user = {
      name: req.body.name,
      age: req.body.age,
    };
    db.collection("users").insertOne(user);
    res.send({ success: true, message: "User added successfully", user });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

//DISPLAY A SPECIFIC USER
app.get("/users/:id", (req, res) => {
  db.collection("users").findOne(
    {
      _id: ObjectId(req.params.id),
    },
    (err, user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).json({ message: err });
      }
    }
  );
});

//UPDATE USER
app.put("/users/:id", (req, res) => {
  db.collection("users").findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $set: { name: req.body.name, age: req.body.age } },
    (err, user) => {
      if (err) {
        res.status(400).json({ message: err });
      } else {
        res.send(`User ${user.value.name} updated!`);
      }
    }
  );
});

//DELETE USER
app.delete("/users/:id", (req, res) => {
  db.collection("users").findOneAndDelete(
    { _id: ObjectId(req.params.id) },
    (err, user) => {
      if (err) {
        res.status(400).json({ message: err });
      } else {
        res.send(`User ${user.value.name} deleted!`);
      }
    }
  );
});
