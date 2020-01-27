var express = require('express');
const routersApp = require('./bin/routes');
var app = express();

app.use(express.json());

app.get('/', getCoisa);

function getCoisa (req, res) {
  res.send('Hello World!!');
}

app.use('/api', routersApp);

const port = process.env.PORT || 3000;  
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});