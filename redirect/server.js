const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req, res) => {
  console.log('request come', req.url, req.headers.origin);

  const host = req.headers.host;

  const html = fs.readFileSync('./index.html');

  if (req.url === '/ab') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'X-Content-Type-Options': 'nosniff',
      'Content-Encoding': 'gzip'
    });

    res.end(zlib.gzipSync(html));
  }
  if (req.url === '/') {
    res.writeHead(302, {
      'Location': '/ab'
    });
    res.end();
  }

}).listen(3005);

console.log('server listening in 3005');
