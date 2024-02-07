import sqlite3 from 'sqlite3';
import fs from 'fs';

const DBSOURCE = 'db.sqlite';

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        // Read SQL statement from userTable.sql file
        const sql = fs.readFileSync('./resources/userTable.sql', 'utf-8');
        // Execute the SQL statement
        db.exec(sql, (err) => {
            if (err) {
                console.error('Error executing SQL statement:', err);
            } else {
                console.log('User table created successfully.');
            }
        });
    }
});

export default db;
