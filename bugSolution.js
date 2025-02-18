const http = require('http');

const maxBodySize = 1024 * 1024; // 1MB

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    let bodyLength = 0;
    req.on('data', chunk => {
      body += chunk.toString();
      bodyLength += chunk.length;
      if (bodyLength > maxBodySize) {
        res.writeHead(413, { 'Content-Type': 'text/plain' });
        res.end('Request Entity Too Large');
        return;
      }
    });
    req.on('end', () => {
      res.writeHead(200);
      res.end('OK');
    });
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});