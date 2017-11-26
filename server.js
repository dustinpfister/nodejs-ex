var http = require('http');

var server = http.createServer(function (req, res) {

        res.writeHead(500, {
            "Content-Type": "text/plain"
        });
        res.write('oh look it works, I guess openshift doesnt suck after all');
        res.end();

    });

server.listen(process.env.PORT || 8080, process.env.IP || 'localhost');