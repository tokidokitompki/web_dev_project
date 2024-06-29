const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

app.post('/upload', function(req, res){
    console.log(req.body); 
})
app.listen(3000); 