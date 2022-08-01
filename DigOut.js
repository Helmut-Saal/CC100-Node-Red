module.exports = function(RED) {
    const DigOutPID = '/sys/kernel/dout_drv/DOUT_DATA'
    const do1 = 1;
    const do2 = 2;
    const do3 = 4;
    const do4 = 8;
    const TRUE = true;
    const FALSE= false;
    const waitingTime = 1;          // Waiting time (in ms) for a new attempt to write a digital output (if file is blocked)
    const maxTime = 5000;           // Max time (in ms) for the writing process
    global.monitor = false;

    // Delay if several outputs are to be written simultaneously
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    // Write a Digital Output
    function writeDO(node, msg, value, fs, digout, starttime) {
        var currentTime = Date.now();
        var DO;  
        
        // Check which digital output should be set to generate appropriate messages
        switch (digout) {
            case do1: 
                DO = "DO 1";
                break;
            case do2:
                DO = "DO 2";
                break;
            case do3: 
                DO = "DO 3";
                break;
            case do4:
                DO = "DO 4";
                break;
            default:
                DO = "NOT EXISTING DO"
                break;
        }

        if((currentTime - starttime) <= maxTime) {
            if (monitor === false) {
                monitor = true;
                // Read the state of the Output's from file
                fs.readFile(DigOutPID,function(err, data) {
                    if (err) {
                        node.status({fill:"red",shape:"ring",text:"Failed"});
                        return console.log(err);
                    } else {            
                        console.log("Read " + DO + " on CC100 was successful.");
                        console.log("Raw Data: " + data);
                        value = Number(data);
                        // Write the Digital Output (value) if needed
                        console.log("Writing " + DO + " on CC100.");
                        node.status({fill:"green",shape:"ring",text:"Writing"});
                        if (msg.payload === true & ((value & digout) != digout)){   
                            value = (value + digout);
                            msg.payload = value;
                        } else if (msg.payload === false & ((value & digout) === digout)) {   
                            value = (value - digout);
                            msg.payload = value;
                        } else {
                            msg.payload = value;  
                        }             
                    }
                    // Write the Digital Output to file
                    const fs = require('fs');
                    fs.writeFile(DigOutPID, String(msg.payload), function(err) {
                        if(err) {
                            node.status({fill:"red",shape:"ring",text:"Failed"});
                            return console.log(err);
                        } else {
                            console.log("Write " + DO + " on CC100 was successful.");
                            node.status({fill:"green",shape:"ring",text:"OK"});
                        }
                    }); 
                    if (msg.payload  & (value & digout)) { 
                        msg.payload=TRUE
                    } else {
                        msg.payload=FALSE  
                    }
                    monitor = false;
                    node.send(msg);  
                });
            } else {
                console.log("Write " + DO + " on CC100 was not possible.");                 // Writing blocked - waiting to write DO on CC100
                node.status({fill:"yellow",shape:"ring",text:"Blocked"}); 
                delay(waitingTime).then(() => {
                    writeDO(node, msg, value, fs, digout, starttime); 
                });
            }
        } else {
            console.log("Writing " + DO + " on CC100 took too long.");
            node.status({fill:"red",shape:"ring",text:"Took too long"});
        }
    }

    // Set Digital Output 1
    function setDO1(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var value;
        const fs = require('fs');
        node.on('input', function(msg) {
            var starttime = Date.now();
            writeDO(node, msg, value, fs, do1, starttime);
        });
    }
    RED.nodes.registerType("Set-DO1",setDO1); 
    
     // Set Digital Output 2
     function setDO2(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        //var parts;
        var value;
        const fs = require('fs');
        node.on('input', function(msg) {
            var starttime = Date.now();
            writeDO(node, msg, value, fs, do2, starttime);
        });
    }
    RED.nodes.registerType("Set-DO2",setDO2); 

     // Set Digital Output 3
     function setDO3(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        //var parts;
        var value;
        const fs = require('fs');
        node.on('input', function(msg) {
            var starttime = Date.now();
            writeDO(node, msg, value, fs, do3, starttime);
        });
    }
    RED.nodes.registerType("Set-DO3",setDO3); 

    // Set Digital Output 4
    function setDO4(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        //var parts;
        var value;   
        const fs = require('fs');   
        node.on('input', function(msg) {
            var starttime = Date.now();
            writeDO(node, msg, value, fs, do4, starttime);
        });
    }
    RED.nodes.registerType("Set-DO4",setDO4); 

    // Read all Digital Outputs at once from file
    function readDO(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            const fs = require('fs');
            var parts;
            fs.readFile(DigOutPID,function(err, data) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"Failed"});
                    return console.log(err);
                } else {
                    console.log("Read all DO's on CC100 was successful.");
                    console.log("Raw Data: " + data.toString());
                    node.status({fill:"green",shape:"ring",text:"OK"});
                    parts = data.toString().split(':');
                    //console.log(parts);
                    var value = Number(parts);
                    var msg1 = {};
                    var msg2 = {};
                    var msg3 = {};
                    var msg4 = {};
                    var msg5 = {};
                    msg1.payload = ((value & do1) === do1);
                    msg2.payload = ((value & do2) === do2);
                    msg3.payload = ((value & do3) === do3);
                    msg4.payload = ((value & do4) === do4);               
                    msg5.payload = {
                        "Dig-OUT-1":((value & do1) === do1),
                        "Dig-OUT-2":((value & do2) === do2),
                        "Dig-OUT-3":((value & do3) === do3),
                        "Dig-OUT-4":((value & do4) === do4),
                        } 
                    node.send([msg1,msg2,msg3,msg4,msg5]); 
                }
            });
        });
    }
    RED.nodes.registerType("Read-DO",readDO);
};