module.exports = function(RED) {
//Testing Modul
    global.monitor1 = false;
    function test(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var msg1 = {};
            var msg2 = {};

            msg1.payload = monitor1;
            if (monitor1 === true)
            {
                monitor1 = false;
            }else
            {
                monitor1 = true;
            }
            msg2.payload = monitor1;
            node.send([msg1,msg2]); 
                });
            }
    RED.nodes.registerType("Test",test);

    function test1(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var msg1 = {};

            if (monitor1 === true)
            {
                node.status({fill:"red",shape:"ring",text:"Wait"});
            }else
            {
                node.status({fill:"yellow",shape:"ring",text:"OK"});
            }
            msg1.payload = monitor1;
            node.send([msg1]); 
                });
            }
    RED.nodes.registerType("Test1",test1);
}