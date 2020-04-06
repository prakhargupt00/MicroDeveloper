let body_parser = require('body-parser');
let express = require('express');

let transformations = require('./transformations')

let app = express();
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

let port = process.env.PORT || 5000;
let router = express.Router();


// logging function
router.use(function(req, res, next) {
    console.log('Received request: ' + JSON.stringify(req.body));
    next();
});

router.get('/', function(req, res) {
    message = {
        text: 'TEST: API is working fine! <br> pass data to /api endpoint'
    }
    res.json(message);
});

router.post('/api', function(req, res) {

    // TODO: Add logic for parsing JSON for the microservice
    res.json(transformations.transform(req.body));
});

app.use('/', router);
app.listen(port);

console.log("Server listening at port: " + port);
