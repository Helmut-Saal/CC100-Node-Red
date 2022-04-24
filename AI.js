module.exports = function(RED) {
    const AI1PID = '/sys/bus/iio/devices/iio:device3/in_voltage3_raw'
    const AI2PID = '/sys/bus/iio/devices/iio:device3/in_voltage0_raw' 
    // Read Analog Input 1
    function readAI1(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const fs = require('fs');
            fs.readFile(AI1PID,function(err, data) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    return console.log(err);
                }
                else {
                    console.log("Read AI 1 on CC100 was successful.");
                    console.log("Raw Data: " + data.toString());
                    node.status({fill:"green",shape:"ring",text:"OK"});               
                    var numb  = Math.round(data / 560) / 10.0;
                    numb = numb.toFixed(2);
                    msg.payload = numb;
                    msg.payload = Number(msg.payload); 
                    node.send(msg); 
                }
            });
        });
    }
    RED.nodes.registerType("Read-AI1",readAI1);

    // Read Analog Input 2
    function readAI2(config) {
        const fs = require('fs');
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            fs.readFile(AI2PID,function(err, data) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    return console.log(err);
                }
                else {
                    console.log("Read AI 2 on CC100 was successful.");
                    console.log("Raw Data: " + data.toString());
                    node.status({fill:"green",shape:"ring",text:"OK"});               
                    var numb  = Math.round(data / 560) / 10.0;
                    numb = numb.toFixed(2);
                    msg.payload = numb;
                    msg.payload = Number(msg.payload); 
                    node.send(msg); 
                }
            });
        });
    }
    RED.nodes.registerType("Read-AI2",readAI2);
};