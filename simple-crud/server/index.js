const express = require("express"); //Instance of the express library
const app = express(); //Creating an app from the instance

const mysql = require("mysql2"); //Setting up MySQL. Note that we need mysql2
const cors = require("cors"); //Cross-origin resource sharing
require("dotenv").config(); //.env file in this folder holds private information

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");

app.post("/create", (req, res) => {
  const nickname = req.body.nickname;
  const item = req.body.item;
  const qty = parseInt(req.body.qty);

  db.query(
    "INSERT INTO orders22 (nickname, item, qty) VALUES(?,?,?)",
    [nickname, item, qty],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted"); //Ending the request by showing a success message
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Yay, your server is running in port 3000");
});
