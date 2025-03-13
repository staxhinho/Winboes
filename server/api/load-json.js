const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const path = require('path');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/api/json', async (req, res) => {
    const filePath = req.query.path;
    if (!filePath) {
        return res.status(400).json({ error: 'Missing file path parameter' });
    }

    const safePath = path.join(__dirname, '../', '../', 'public', 'json', path.basename(filePath));

    console.log(`Trying to read file from: ${safePath}`); // Debugging log

    try {
        const data = await fs.readFile(safePath, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error(`Error reading file: ${error.message}`); // Log the exact error
        res.status(500).json({ error: 'Failed to read JSON file' });
    }
});

module.exports = server;
