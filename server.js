const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.get('/validate', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.post('/validate', (req, res) => {
    const { from, to } = req.body;

    // Calculate distance between squares
    const dx = Math.abs(from.col - to.col);
    const dy = Math.abs(from.row - to.row);

    const isValid = (dx === 2 && dy === 1) || (dx === 1 && dy === 2);

    res.json({ isValid });
});
app.listen(port, () => {
    console.log(`server running on Port:${port}`);
})