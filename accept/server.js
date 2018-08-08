const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req, res) => {
  console.log('request come', req.url, req.headers.origin);

  const host = req.headers.host;

  const html = fs.readFileSync('./index.html');

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'X-Content-Type-Options': 'nosniff',
      'Content-Encoding': 'gzip'
    });

    res.end(zlib.gzipSync(html));
  } else {
    console.log(111111, req.url);
    res.writeHead(200);

    res.end();
  }
   
}).listen(3004);

console.log('server listening in 3004');
