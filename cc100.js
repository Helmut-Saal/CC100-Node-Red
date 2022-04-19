module.exports = function(RED) {
//Testing Modul
    function test(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var msg1 = {};
            var msg2 = {};
            msg1.payload = 1;
            msg2.payload = 2;

            
            node.send([msg1,msg2]); 
                });
            }
    RED.nodes.registerType("Test",test);
}