var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
exports.router = router;

router.use(bodyParser.json());

router.route('/')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send all the promotions for you');
})
.post(function(req, res, next) {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting all promotions');
});

router.route('/:promoId')
.all(function(req, res, next) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    next();
})
.get(function(req, res, next) {
    res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
})
.put(function(req, res, next) {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting promotion: ' + req.params.promoId);
});