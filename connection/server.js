const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('request come', req.url, req.headers.origin);

  const host = req.headers.host;

  const html = fs.readFileSync('./index.html', 'utf-8');
  const img = fs.readFileSync('./1533712647.png');

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      // 'Connection': 'close',
    });

    res.end(html);
  } else {
    res.writeHead(200, {
      'Content-Type': 'image/jpg',
      // 'Connection': 'close',
    });

    res.end(img);
  }
}).listen(3003);

console.log('server listening in 3003');
