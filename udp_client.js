
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


promptForClientMessage();


function promptForClientMessage() {
  prompt.get('message', function (err, result) {
    //sending msg
    client.send(result.message, PORT, HOST, function(error){
      
      if(error){
        console.log('An error has occurred!');
        client.close();

      } else {
        console.log('Data sent !!!');
      }
    });
  });
}
