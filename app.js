var fs = require('fs'),
    to = fs.createWriteStream('output.txt'),
    file = fs.createReadStream('information.txt');

file.on('data', function(data) {
  to.write(data);
});

file.on('end', function() {
  to.end();
});
