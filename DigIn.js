module.exports = function(RED) {
  // Read all Digital Inputs at once
    function readDI(config) {
        const DigInPID = '/sys/devices/platform/soc/44009000.spi/spi_master/spi0/spi0.0/din'
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const fs = require('fs');
            const di1 = 1;
            const di2 = 2;
            const di3 = 4;
            const di4 = 8;
            const di5 = 16;
            const di6 = 32;
            const di7 = 64;
            const di8 = 128;
            var parts;
            fs.readFile(DigInPID,function(err, data) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    return console.log(err);
                }
                else {
                    console.log("Read all DI's on CC100 was successful.");
                    console.log("Raw Data: " + data.toString());
                    node.status({fill:"green",shape:"ring",text:"OK"});
                    parts = data.toString().split(':');
                    var value = Number(parts);
                    var msg1 = {};
                    var msg2 = {};
                    var msg3 = {};
                    var msg4 = {};
                    var msg5 = {};
                    var msg6 = {};
                    var msg7 = {};
                    var msg8 = {};
                    var msg9 = {};
                    msg1.payload = ((value & di1) === di1);
                    msg2.payload = ((value & di2) === di2);
                    msg3.payload = ((value & di3) === di3);
                    msg4.payload = ((value & di4) === di4);   
                    msg5.payload = ((value & di5) === di5);
                    msg6.payload = ((value & di6) === di6);
                    msg7.payload = ((value & di7) === di7);
                    msg8.payload = ((value & di8) === di8);                    
                    msg9.payload = {
                        "Dig-IN-1":((value & di1) === di1),
                        "Dig-IN-2":((value & di2) === di2),
                        "Dig-IN-3":((value & di3) === di3),
                        "Dig-IN-4":((value & di4) === di4),
                        "Dig-IN-5":((value & di5) === di5),
                        "Dig-IN-6":((value & di6) === di6),
                        "Dig-IN-7":((value & di7) === di7),
                        "Dig-IN-8":((value & di8) === di8),
                        } 
                    node.send([msg1,msg2,msg3,msg4,msg5,msg6,msg7,msg8,msg9]); 
                }
            });
        });
    }
    RED.nodes.registerType("Read-DI",readDI);
};