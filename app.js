var fs = require('fs'),
    file = fs.createWriteStream('guestbook.txt'),
    BinaryServer = require('binaryjs').BinaryServer,
    server = new BinaryServer({ port: 9000 });

server.on('connection', function(client) {

  client.on('stream', function(stream) {
    file.write(stream);
    file.write('\n');
  });

});
