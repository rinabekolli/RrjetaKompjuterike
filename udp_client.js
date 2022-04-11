
const udp = require('dgram');
const prompt = require("prompt");

const PORT = 2222;
const HOST = '127.0.0.1';

// creating a client socket
var client = udp.createSocket('udp4');

client.on('message', function (msg, info) {
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
  promptForClientMessage();
});
