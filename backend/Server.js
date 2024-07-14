const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', 'utf-8',(err, data) => {
       if(err) {
         console.log('somethig went wrong', err);
         return res.status(500).send('Oops something went wrong');
       }
       return res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});