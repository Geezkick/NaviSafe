const express = require('express');
const Hazard = require('../models/Hazard');

const router = express.Router();

// Get all hazards
router.get('/', async (req, res) => {
  try {
    const hazards = await Hazard.find({ isActive: true })
      .populate('reportedBy', 'username')
      .sort({ createdAt: -1 });
    
    res.json(hazards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hazards' });
  }
});

// Report a new hazard
router.post('/', async (req, res) => {
  try {
    const { type, description, location, severity } = req.body;
    
    const hazard = await Hazard.create({
      type,
      description,
      location,
      severity,
      reportedBy: req.userId // Would be set by auth middleware in real implementation
    });
    
    res.status(201).json(hazard);
  } catch (error) {
    res.status(500).json({ message: 'Error reporting hazard' });
  }
});

// Confirm a hazard
router.patch('/:id/confirm', async (req, res) => {
  try {
    const hazard = await Hazard.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { confirmedBy: req.userId } }, // Would be set by auth middleware
      { new: true }
    );
    
    res.json(hazard);
  } catch (error) {
    res.status(500).json({ message: 'Error confirming hazard' });
  }
});

module.exports = router;
