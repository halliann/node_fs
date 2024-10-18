console.log("BONUS:\n==========\n");

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const { url, method } = req;
    let filePath = path.join(__dirname, 'bonus_pages', 'hello.html');
    let statusCode = 200;

    // 
    switch (req.url) {
        case '/':
        case '/hello':
            filePath = path.join(__dirname, 'bonus_pages', 'hello.html');
            break;
        case '/bonjour':
            filePath = path.join(__dirname, 'bonus_pages', 'bonjour.html');
            break;
        default:
            filePath = path.join(__dirname, 'bonus_pages', '404.html');
            statusCode = 404;
            break;
    };

    fs.readFile(filePath, (err, html) => {
        if(err) {
            res.writeHead(500, { 'Content-Type' : 'text/html' });
            res.end('Server Error');
            return console.error(err);
        } 
        res.statusCode = statusCode;
        res.writeHead(statusCode, { 'Content-Type' : 'text/html' });
        res.end(html);

        const logData = () => {
            const timestamp = new Date().toString();
            console.log(`${method} | ${url} | ${res.statusCode} | ${timestamp}`);
        };
    
        logData();
    });
})
.listen(3000, () => {
    console.log('Server listening at http://localhost:3000...')
})