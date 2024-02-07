"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var sqlite3 = require('sqlite3');
var DBSOURCE = './database/db.sqlite';
var db = new sqlite3.Database(DBSOURCE, function (err) {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Connected to the SQLite database.');
        // Read SQL statement to create tables
        var sql = fs.readFileSync('./resources/database.sql', 'utf-8');
        // Execute the SQL statement
        db.exec(sql, function (err) {
            if (err) {
                console.error('Error executing SQL statement:', err);
            }
            else {
                console.log('Tables created successfully.');
            }
        });
    }
});
exports.default = db;
