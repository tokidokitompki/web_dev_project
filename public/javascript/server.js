const express = require('express');
const app = express();
const port = 3000;

var path = require('path'); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name; // access form data
    // Add validation logic here
    res.send(`Form Submitted!`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
