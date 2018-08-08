const http = require('http');

http.createServer((req, res) => {
  console.log('request come', req.url, req.headers.origin);

  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
    'Access-Control-Max-Age': '1000'  //  该时间内  不需要再发送与预检请求
  });
  res.end('123');
}).listen(3001);

console.log('server listening in 3001');
