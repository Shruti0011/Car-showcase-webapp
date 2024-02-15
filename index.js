const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 8000;
const logFile = 'log.txt';

const server = http.createServer((req, res) => {
const logMessage = '${new Date().toISOString()} : Received ${req.method} at ${req.url}\n;'
fs.appendFileSync(logFile, logMessage);

const parsedUrl = url.parse(req.url)

switch (parsedUrl.pathname) {
    case '/':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the BarterX!');
        break;
    case '/products':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Here are the products up for Sale in BarterX');
        break;
    case '/login':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Login to the BarterX');
        break;
    case '/signup':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Sign up to the BarterX');
        break;
    case '/profile':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Trader Profile');
        break;
    case '/cart':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Your Shopping Cart is here');
        break;
    case '/checkout':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Lets\' start shipping');
        break;
    case '/orders':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Your Orders are here');
        break;
    case '/categories':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Browse Categories');
        break;
    case '/chat':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Your Chat with fellow Traders');
        break;
    case '/contact':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Contact Us at');
        break;
    case '/about':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('The modern approach to trading our commodities');
        break;
    default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
    }

    res.end();
});

server.listen(PORT, () => {
    console.log('Server initiated on port ${PORT}...');
});