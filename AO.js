module.exports = function(RED) {
    const AO1OnPID ='/sys/bus/iio/devices/iio:device0/out_voltage1_powerdown'
    const AO1PID = '/sys/bus/iio/devices/iio:device0/out_voltage1_raw'
    const AO2OnPID = '/sys/bus/iio/devices/iio:device1/out_voltage2_powerdown'
    const AO2PID = '/sys/bus/iio/devices/iio:device1/out_voltage2_raw'  
    // Set Analog Output 1
    function setAO1(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var volt;
        var raw;
        const on = 0;
        const fs = require('fs');
        node.on('input', function(msg) {
                // Calculate Volt to RawData
                if (msg.payload >= 0 && msg.payload <= 10)
                {
                    volt = msg.payload;
                    raw = volt * 335;
                    raw = Math.round(raw);
                    // Switch AO on
                    const fs = require('fs');
                    fs.writeFile(AO1OnPID, String(on), function(err) {
                    if(err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    }else {
                        console.log("AO 1 turned on was successful.");
                    // Write the Analog Output 1 to file
                    const fs = require('fs');
                    fs.writeFile(AO1PID, String(raw), function(err) {
                    if(err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    }else {
                        console.log("Write AO 1 on CC100 was successful.");
                        console.log("Set RawData=" + raw);
                        node.status({fill:"green",shape:"ring",text:"OK"});
                            }
                        });     
                    }
                });
                node.send(msg);
                }else
                {
                    console.log("Value not allowed, >=0 and <=10.");
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    
                }
        }); 
    }
    RED.nodes.registerType("Set-AO1",setAO1); 

      // Set Analog Output 2
      function setAO2(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var volt;
        var raw;
        const on = 0;
        const fs = require('fs');
        node.on('input', function(msg) {
                // Calculate Volt to RawData
                if (msg.payload >= 0 && msg.payload <= 10)
                {
                    volt = msg.payload;
                    raw = volt * 335;
                    raw = Math.round(raw);
                    // Switch AO on
                    const fs = require('fs');
                    fs.writeFile(AO2OnPID, String(on), function(err) {
                    if(err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    }else {
                        console.log("AO 2 turned on was successful.");
                    // Write the Analog Output 1 to file
                    const fs = require('fs');
                    fs.writeFile(AO2PID, String(raw), function(err) {
                    if(err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    }else {
                        console.log("Write AO 2 on CC100 was successful.");
                        console.log("Set RawData=" + raw);
                        node.status({fill:"green",shape:"ring",text:"OK"});
                            }
                        });     
                    }
                });
                node.send(msg);
                }else
                {
                    console.log("Value not allowed, >=0 and <=10.");
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    
                }
        }); 
    }
    RED.nodes.registerType("Set-AO2",setAO2);
    
        function readAO(config) {
            RED.nodes.createNode(this,config);
            var node = this;
            node.on('input', function(msg) {
                const fs = require('fs');
                var read1 = false;
                var read2 = false; 
                var msg1 = {};
                var msg2 = {};   
                var numb;     
                fs.readFile(AO1PID,function(err, data) {
                    if (err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    }
                    else {
                        read1 = true;
                        numb  = data / 335.0;
                        numb = numb.toFixed(2);
                        msg1.payload = Number(numb);
                        console.log("Read AO 1 on CC100 was successful.");
                        console.log("Raw Data: " + data.toString());
                    }
                    fs.readFile(AO2PID,function(err, data) {
                    if (err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    }
                    else {
                        read2 = true;
                        numb  = data / 335.0;
                        numb = numb.toFixed(2);
                        msg2.payload = Number(numb);
                        console.log("Read AO 2 on CC100 was successful.");
                        console.log("Raw Data: " + data.toString());
                    }
                    if (read1 === true && read2 === true) {
                        node.status({fill:"green",shape:"ring",text:"OK"});
                        console.log("Scaled Values, AO1: " + msg1.payload + " AO2: " + msg2.payload);
                        node.send([msg1,msg2]);
                    }
                    else
                    {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log("Read of AO's on CC100 failed.");  
                    }
                    });                   
                });
            });
        }
        RED.nodes.registerType("Read-AO",readAO);   
};