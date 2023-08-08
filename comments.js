// create web server
var http = require('http');
var fs = require('fs');

// create web server object
var server = http.createServer(function (req, res) {
    // display a message on the terminal
    console.log('request was made: ' + req.url);
    // display a message on the browser
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // read file
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // send file to browser
    myReadStream.pipe(res);
});

// listen for a port
server.listen(3000, () => {
    console.log('listening to port 3000');
});