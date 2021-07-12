const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Request received:', req);
    res.send('Hello There!');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
