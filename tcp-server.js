require('dotenv').config();
var net = require('net');
var http = require('./modules/http');

var server = net.createServer(function(socket){
    // WHen hex packets are recieved 
    socket.on('data', (data) => {
        let hexPacket = data.toString('hex');
        if(data.length > 0){
            http.sendDataToServer(hexPacket);
        }
    }) 
})

server.listen(process.env.TCP_PORT, process.env.SERVER_ADDR, () => {
    console.log(`TCP listening on port ${process.env.TCP_PORT}`)
});