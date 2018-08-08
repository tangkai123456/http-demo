const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('request come', req.url);

  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf-8');

    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(html);
  }

  if (req.url === '/script.js') {
    // res.writeHead(200, {
    //   'Content-Type': 'text/javascript',
    //   'Cache-Control': 'max-age=2000000, no-cache',
    //   'Last-Modified': '123',
    //   'Etag': '123',
    // });

    const etag = req.headers['if-none-match'];
    console.log(1111111, etag);
    if (etag === '123') {
      res.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000000, no-store',
        'Last-Modified': '123',
        'Etag': '123',
      });
      res.end('456');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000000, no-store',
        'Last-Modified': '123',
        'Etag': '123',
      });

      res.end('123');
    }

  }

}).listen(3000);

console.log('server listening in 3000');
