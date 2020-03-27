const mysql = require("mysql");
const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection")

Router.get("/", (request, response)=> {
    mysqlConnection.query("SELECT * from profiles", (error, rows, fields)=> {
        if (!error)
        {
            response.send(rows)
        } else {
            console.log(error);
        }
    })
})

module.exports = Router;