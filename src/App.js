"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbCreation_1 = require("../database/dbCreation");
var express = require('express');
// Create an Express application instance
var app = express();
var port = 3000;
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
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
