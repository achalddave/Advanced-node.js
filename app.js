var fs = require('fs'),
    file = fs.createWriteStream('guestbook.txt'),
    BinaryServer = require('binaryjs').BinaryServer,
    server = new BinaryServer({ port: 9000 });

server.on('client', function(client) {

  client.on('stream', function(stream) {
    stream.pipe(file);
  });

});
