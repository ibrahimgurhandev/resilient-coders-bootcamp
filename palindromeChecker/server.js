const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet')
const querystring = require('querystring');


const server = http.createServer(function (req, res) {
    const params = querystring.parse(url.parse(req.url).query);

    const page = url.parse(req.url).pathname;
    // const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.write(data);
            res.end();
        });
    } else if (page == "/api") {
        if ('string' in params) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            let checkString = params['string'];
            let reverse = checkString.split('').reverse().join('');
            if (checkString === reverse) {
                var result = "yes";
            } else {
                var result = "no";
            }
            const objToJson = {
                checker: result
            }
            res.end(JSON.stringify(objToJson));
        }
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);