🚚 Node.js TCP Socket Server for GPS Tracking Devices (Concox)
Overview

This project is a simple Node.js TCP Socket Server designed to receive and process data packets from GPS tracking devices such as Concox GT06. The server listens on a specified TCP port, receives binary packets from the devices, and forwards the raw data to a backend server via an HTTP POST request for further decoding or processing.
📦 Features

    Accepts TCP connections from GPS tracking devices.

    Logs and intercepts raw hex packets.

    Forwards each received packet to a backend server using the built-in Node.js http module.

    Easy to configure using a .env file.

🔧 Installation

    Clone the repository:

git clone https://github.com/yourusername/nodejs-tcp-gps-server.git
cd nodejs-tcp-gps-server

    Install dependencies:

npm install

    Create a .env file:

TCP_PORT=3081
SERVER_ADDR=0.0.0.0
API_HOST=API_HOST
API_PATH=API_PATH

    Start the TCP server:

node tcp-server.js

🚀 Running PHP Backend for Testing

If you want to test HTTP requests locally with a simple PHP backend

    Run PHP built-in server:

php -S localhost:8000

🛠️ Usage Example

Simulate sending a Concox-like packet using netcat:

echo -ne '\x78\x78\x0D\x01\x01\x23\x45\x67\x89\x01\x23\x45\x67\x89\x00\x01\x8D\x0D\x0A' | nc localhost 3081

Or use the provided Python script to send packets manually.
📂 Project Structure

├── modules/
│   └── http.js          # HTTP module to forward TCP data to backend
├── tcpServer.js         # Main TCP server handling incoming packets
├── .env                 # Environment variables
└── README.md            # Project documentation

📑 Notes

    Uses Node.js net module for TCP handling.

    Uses Node.js http module for backend communication.

    Tested with Concox GT06 protocol simulated packets.

    Can be extended to parse or decode packets before forwarding.

⚠️ Disclaimer

This server only forwards raw data; it does not decode or process Concox protocol messages internally. Decoding should be done at the backend server.
💬 Contributions / Issues

Feel free to submit issues or pull requests if you want to improve this project!
📜 License

MIT License.
