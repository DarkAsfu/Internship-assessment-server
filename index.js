const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const service = require('./data/service.json');

app.use(cors());
app.get('/', (req, res) =>{
    res.send('server is running !!!....')
})
app.get('/service', (req, res) =>{
    res.send(service);
})
app.listen(port, () =>{
    console.log(`The server api running on port: ${port}`)
})