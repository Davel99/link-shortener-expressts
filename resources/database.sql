CREATE TABLE IF NOT EXISTS Links (
    id INTEGER PRIMARY KEY,
    full_url TEXT,
    short_url TEXT UNIQUE,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE IF NOT EXISTS Statistics (
--     id INTEGER PRIMARY KEY,
--     link_id INTEGER,
--     user_agent TEXT,
--     geolocation TEXT,
--     ip_address TEXT,
--     device_type TEXT,
--     os TEXT,
--     browser TEXT,
--     timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (link_id) REFERENCES Links(id)
-- );
