const udp = require('dgram');
var fs = require('fs');

//creating a udp server
var server=udp.createSocket('udp4');

const PORT=2222;
const HOST='localhost';

server.bind(PORT,HOST);

//emits when any error occurs
server.on('error',function(error){
  console.log('Error: ' + error);
  server.close();
});

server.on('connect', () => {
  console.log('A client just connected');
})

