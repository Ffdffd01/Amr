// Import MySQL2 library
const mysql = require('mysql2');

// Load environment variables from .env
require('dotenv').config();

// Create a connection pool to improve performance on multiple queries
const pool = mysql.createPool({
    host: process.env.DB_HOST,           // Database host (e.g., localhost)
    user: process.env.DB_USER,           // Database username (e.g., root)
    password: process.env.DB_PASSWORD,   // Database password
    database: process.env.DB_NAME,       // Database name
    waitForConnections: true,            // Wait for a connection if none are available
    connectionLimit: 10,                 // Max number of connections in the pool
    queueLimit: 0                        // Unlimited request queue size
});

// Export the promise-based pool for use in async/await queries
module.exports = pool.promise();
