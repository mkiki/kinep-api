const express = require('express')
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
var md5 = require('md5');

const app = express()
const port = 3000

// /validate.json?serial=B4C35-1BFA5-D2FFA-F7678-20D6F&challenge=2e7669fcfff02b2dce68b1a6fb78c1c4
app.get('/validate.json', (req, res) => {
  var serial = req.query.serial;
  var challenge = req.query.challenge;

 var challenge_resp = md5("31337" + challenge);
 var  resp = { "challenge_resp": challenge_resp };

  res.send(JSON.stringify(resp));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
