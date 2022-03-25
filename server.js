const express = require('express');
const app = express();

let port = 5000

const server = app.listen(port, () => {
    console.log('App is running on port %port%'.replace('%port%', port));
})

app.get('/app', (req, res) =>{
    res.status(200).end('OK')
    res.type('text/plain')
})

app.get('/app/echo/:number', (req, res) =>{
    res.status(200).json({'message': req.params.number});
})

app.get('/app/flip', (req, res) => {
    let flip = coinFlip();
    res.status(200).json({'flip': flip})
})

app.use(function(req, res){
    res.status(404).send('Endpoint does not exist')
    res.type('text/plain')
})

// functions
function coinFlip() {
    return Math.random() < 0.5 ? 'heads' : 'tails'
  }