const express = require('express');
const app = express();
const courses = require('./courses.json');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server running!!')
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.listen(port, () =>{
    console.log(`Server running on port ${port} `)
})