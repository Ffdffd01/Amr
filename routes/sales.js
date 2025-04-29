const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new sale
router.post('/', async (req, res) => {
  const { customer_name, quantity, sale_amount, sale_date } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO sales (customer_name, quantity, sale_amount, sale_date) VALUES (?, ?, ?, ?)',
      [customer_name, quantity, sale_amount, sale_date]
    );
    res.status(201).json({ message: 'Sale added!', saleId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get all sales
router.get('/', async (req, res) => {
  try {
    const [sales] = await db.execute('SELECT * FROM sales');
    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
