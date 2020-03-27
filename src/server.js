
import express from 'express';
import mysql from "mysql";
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3001;
const  app = express();
const mysqlConnection = require("../connection.js");
const ProfileRoutes = require("./routes/profiles.js");

app.use(bodyParser.json());

app.use("/profiles", ProfileRoutes);




app.listen(3000);

// Pulled in a code snippet from an older project of mine
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT} !!!`);
  });
  
  