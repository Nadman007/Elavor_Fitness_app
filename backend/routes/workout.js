const express = require('express');
const Workout = require('../models/Workout');
const auth    = require('../middleware/auth');

const router = express.Router();

// POST /workouts/log
router.post('/log', auth, async (req, res) => {
  const { type, duration, calories, notes } = req.body;

  if (!type || !duration) {
    return res.status(400).json({ error: 'Type and duration are required' });
  }

  try {
    const workout = new Workout({
      userId: req.user.userId,
      type,
      duration,
      calories: calories || 0,
      notes: notes || '',
    });
    await workout.save();
    res.status(201).json({ message: 'Workout logged!', workout });
  } catch (err) {
    console.error('Workout log error:', err);
    res.status(500).json({ error: 'Failed to log workout' });
  }
});

// GET /workouts
router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.userId }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// DELETE /workouts/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!workout) return res.status(404).json({ error: 'Workout not found' });
    res.json({ message: 'Workout deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

module.exports = router;
