///dev/cu.usbmodem143101'
const SerialPort = require('serialport');

// Add your USB port name
const port = new SerialPort('/dev/cu.usbmodem143101', {
    
});

const fs = require('fs');

const logIntervalMinutes = 0.1;
let lastMoment = new Date();

function tryParseJson (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return JSON.parse(str);
}



port.on('open', function () {
	console.log('Opened port...');
	
	port.on('data', function (data) {
		const sensorData = tryParseJson(data);
		
		console.log(sensorData.humidity);
		console.log(sensorData.temperature);
	});
});

