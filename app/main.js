const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  console.log('client connected')

  connection.on('data', data => {
    connection.write('+PONG\r\n')
  })

  // connection.on('end', () => {
  //   console.log('client disconnected');
  // });
});

server.on('error', (err) => {
  throw err;
});

server.listen(6379, "127.0.0.1");
git add . && git commit --allow-empty -m 'hide end' && git push origin master
