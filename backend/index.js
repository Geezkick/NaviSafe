// backend/index.js — Express + Socket.io minimal server
require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const hazardsRoute = require('./routes/hazards');


const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.json({ status: 'NaviSafe backend ok' }));
app.use('/api/hazards', hazardsRoute(io));


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
