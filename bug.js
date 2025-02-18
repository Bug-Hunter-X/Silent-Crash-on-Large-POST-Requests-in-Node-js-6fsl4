const http = require('http');

const server = http.createServer((req, res) => {
  // Without this check, the server will crash if the request body is too large
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // If the body is too large, it will crash the server without error logging
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