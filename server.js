var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');
var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter.router);
app.use('/promotions', promoRouter.router);
app.use('/leadership', leaderRouter.router);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});