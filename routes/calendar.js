const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new calendar event
router.post('/', async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO calendar (title, description, date) VALUES (?, ?, ?)',
      [title, description, date]
    );
    res.status(201).json({ message: 'Event added!', eventId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get all calendar events
router.get('/', async (req, res) => {
  try {
    const [events] = await db.execute('SELECT * FROM calendar');
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
