const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('request come', req.url, req.headers.origin);

  const host = req.headers.host;

  if (req.url === '/') {
    const html = fs.readFileSync('./cookie.html', 'utf-8');

    if (host === 'a.test.com') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['id=123; max-age=3', 'name=zhangsan; max-age=5'],
      });
    }

    res.end(html);
  }
}).listen(3002);

console.log('server listening in 3002');
