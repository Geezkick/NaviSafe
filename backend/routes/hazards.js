// routes/hazards.js
const express = require('express');
module.exports = (io) => {
const router = express.Router();


// in-memory store for MVP
const hazards = [];


router.get('/', (req, res) => {
res.json(hazards.slice().reverse());
});


router.post('/', (req, res) => {
const { lat, lng, category, description, image, userId } = req.body;
const id = Date.now();
const item = { id, lat, lng, category, description, image, userId, createdAt: new Date() };
hazards.push(item);
// emit to connected clients
io.emit('hazard:created', item);
res.status(201).json(item);
});


router.post('/:id/confirm', (req, res) => {
const { id } = req.params;
const item = hazards.find(h => String(h.id) === String(id));
if (!item) return res.status(404).json({ error: 'Not found' });
item.confirmations = (item.confirmations || 0) + 1;
io.emit('hazard:confirmed', { id: item.id, confirmations: item.confirmations });
res.json(item);
});


return router;
};
