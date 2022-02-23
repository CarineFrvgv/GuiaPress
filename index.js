const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const app = express();


// view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render('index');
});

// database connection
connection.authenticate()
    .then(() => {
        console.log('connection succesful');
    })
    .catch((err) => {
        console.log(err);
    });


app.listen(3000, () => console.log('app running on port 3000'));

