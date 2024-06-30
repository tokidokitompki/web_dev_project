const express = require('express');
const app = express();
const port = 5500;

app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contactform.html');
 
});

app.post('/submit-form', (req, res) => {
    const data = req.body;

    console.log("Your Name: ", data.name);
    console.log("Your Email: ", data.email);
    console.log("Your Phone Number: ", data.phone);
    console.log("Your Message: ", data.message)
    res.send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

