const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('request come', req.url, req.headers.origin);

  const html = fs.readFileSync('./index.html');

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Security-Policy': 'default-src http: https:'
    });

    res.end(html);
  }

  if(req.url === '/script.js') {
    res.writeHead(200, {
      'Content-Type': 'text/javascript',
    });

    res.end('console.log("loaded script")');
  }

  
}).listen(3006);

console.log('server listening in 3006');
