const express = require('express');

const app = express();

const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});