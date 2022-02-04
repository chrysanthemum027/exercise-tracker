const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
// const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', function(request,response){
    response.send('Hello');
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});