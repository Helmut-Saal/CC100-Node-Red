module.exports = function(RED) {
    const PT1PID = '/sys/bus/iio/devices/iio:device2/in_voltage13_raw'
    const PT2PID = '/sys/bus/iio/devices/iio:device2/in_voltage1_raw' 
    // Read PT1000 Input 1
    function readPT1(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const fs = require('fs');
            fs.readFile(PT1PID,function(err, data) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    return console.log(err);
                }
                else {
                    console.log("Read PT 1 on CC100 was successful.");
                    console.log("Raw Data: " + data.toString());
                    node.status({fill:"green",shape:"ring",text:"OK"});                      
                    var scale = 0;
                    if (data >= 600 && data < 3600) { scale = 37;}
                    else if (data >= 3600 && data < 6700) { scale = 43;}
                    else if (data >= 6700 && data < 9750) { scale = 45;}
                    else if (data >= 9750 && data < 12740) { scale = 49;}
                    else if (data >= 12740 && data < 15700) { scale = 50.6;}
                    else if (data >= 15700 && data < 21000) { scale = 52.4;}
                    else if (data > 21000) { scale = 53.7;}
                    node.status({fill:"green",shape:"ring",text:"OK"});  
                    var numb  = data / scale - 200;
                    numb = numb.toFixed(1);
                    msg.payload = numb;
                    msg.payload = Number(msg.payload); 
                    node.send(msg); 
                }
            });
        });
    }
    RED.nodes.registerType("Read-PT1",readPT1);

    // Read PT1000 Input 2
    function readPT2(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const fs = require('fs');
            fs.readFile(PT2PID,function(err, data) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    return console.log(err);
                }
                else {
                    console.log("Read PT 2 on CC100 was successful.");
                    console.log("Raw Data: " + data.toString());
                    node.status({fill:"green",shape:"ring",text:"OK"});                      
                    var scale = 0;
                    if (data >= 600 && data < 3600) { scale = 37;}
                    else if (data >= 3600 && data < 6700) { scale = 43;}
                    else if (data >= 6700 && data < 9750) { scale = 45;}
                    else if (data >= 9750 && data < 12740) { scale = 49;}
                    else if (data >= 12740 && data < 15700) { scale = 50.6;}
                    else if (data >= 15700 && data < 21000) { scale = 52.4;}
                    else if (data > 21000) { scale = 53.7;}
                    node.status({fill:"green",shape:"ring",text:"OK"});  
                    var numb  = data / scale - 200;
                    numb = numb.toFixed(1);
                    msg.payload = numb;
                    msg.payload = Number(msg.payload); 
                    node.send(msg); 
                }
            });
        });
    }
    RED.nodes.registerType("Read-PT2",readPT2);
};