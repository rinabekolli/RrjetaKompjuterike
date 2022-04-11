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

// emits on new datagram msg
server.on('message', function (msg, info){
    console.log('Data received from client : ' + msg.toString() + " from " + info.address + " : " + info.port);
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
  
    if(msg.toString() == "close") {
      server.close();
      return;
    }
   
    //sending msg
    server.send(msg, info.port, 'localhost', function(error){
      if (error){
        server.close();
      }else{
        console.log('Data sent !!!');
      }
    });
  
  });
