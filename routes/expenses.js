const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new expense
router.post('/', async (req, res) => {
  const { name, amount, expense_date, status } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO expenses (name, amount, expense_date, status) VALUES (?, ?, ?, ?)',
      [name, amount, expense_date, status]
    );
    res.status(201).json({ message: 'Expense added!', expenseId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const [expenses] = await db.execute('SELECT * FROM expenses');
    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
