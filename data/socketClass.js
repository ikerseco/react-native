import socketContext from '../context/socketContext'

var SocketIOClient = require('socket.io-client');


export default class SocketClass {
	constructor(url) {
		this.server = url;
		this.socket = null;
	}

	start() {
		this.socket = SocketIOClient.connect(this.server);
		this.socket.on('userConect', data => {
			
		console.log(data)
		});
	}

	onLed(data) {
		this.socket.emit('ledHear', data);
		console.log(data);
	}

	offLed(data) {
		this.socket.emit('ledHear', data);
		console.log(data);
	}
	sendMessage(data) {
		console.log(data)
		this.socket.emit('move', data);
	}
}
