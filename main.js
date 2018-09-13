const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});

