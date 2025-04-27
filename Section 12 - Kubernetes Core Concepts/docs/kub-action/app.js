const express = require('express');
const app = express();

app.get('/nothing', (req, res) => {
    res.send('Hello from Node.js!');
});

app.get('/error', (req, res) => {
    process.exit(1); // Force error
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
}); 