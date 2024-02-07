"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbCreation_1 = require("../database/dbCreation");
var express = require('express');
require('dotenv').config();
// Create an Express application instance
var app = express();
var PORT = process.env.PORT || 5500;
// Middleware to parse JSON bodies
app.use(express.json());
// Sample route
app.get('/', function (req, res, next) {
    dbCreation_1.default.all('SELECT * FROM Links', function (err, rows) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});
// Error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, function () {
    console.log("Example app listening on port ".concat(PORT));
});
