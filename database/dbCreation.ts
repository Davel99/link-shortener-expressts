import { Database } from 'sqlite3'

const fs = require('fs');
const sqlite3 = require('sqlite3');

const DBSOURCE = './database/db.sqlite';

const db : Database = new sqlite3.Database(DBSOURCE, (err : Error) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        // Read SQL statement to create tables
        const sql = fs.readFileSync('./resources/database.sql', 'utf-8');
        // Execute the SQL statement
        db.exec(sql, (err) => {
            if (err) {
                console.error('Error executing SQL statement:', err);
            } else {
                console.log('Tables created successfully.');
            }
        });
    }
});

export default db;
