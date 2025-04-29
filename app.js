// Import core modules
const express = require('express');         // Express web framework
const cors = require('cors');               // Middleware to enable CORS
require('dotenv').config();                 // Load environment variables from .env

// Import route handlers
const salesRoutes = require('./routes/sales');         // Sales API routes
const expensesRoutes = require('./routes/expenses');   // Expenses API routes
const calendarRoutes = require('./routes/calendar');   // Calendar/Reminders API routes

const app = express();

// Global middleware
app.use(cors());               // Enable Cross-Origin Resource Sharing
app.use(express.json());       // Parse JSON request bodies

// API route mounting
app.use('/api/sales', salesRoutes);         // Handle /api/sales endpoints
app.use('/api/expenses', expensesRoutes);   // Handle /api/expenses endpoints
app.use('/api/calendar', calendarRoutes);   // Handle /api/calendar endpoints

// Start the server
const PORT = process.env.PORT || 5000;      // Use .env PORT or default to 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
