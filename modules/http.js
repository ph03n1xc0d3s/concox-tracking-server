require('dotenv').config();
const http = require('http');

function sendDataToServer(packet) {
    const data = JSON.stringify({
        packetData: packet // send TCP hex packet here
    });

    const options = {
        hostname: process.env.API_URL, // change to your actual host
        port: process.env.API_PORT,
        path: process.env.API_PATH, // change path if needed
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    const req = http.request(options, (res) => {
        console.log(`Request status code: ${res.statusCode}`);

        res.on('data', (chunk) => {
            console.log(`response from backend: ${chunk}`);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.write(data);
    req.end();
}

module.exports = { sendDataToServer }; // export function
