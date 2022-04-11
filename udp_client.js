
const udp = require('dgram');
const prompt = require("prompt");

const PORT = 2222;
const HOST = '127.0.0.1';

// creating a client socket
var client = udp.createSocket('udp4');
