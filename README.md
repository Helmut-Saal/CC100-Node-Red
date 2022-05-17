# node-red-contrib-wago-cc100
<H3>Node-Red library to controll EA's on CC100</H3>

Directly read and set the Digital In- Outputs and also Analog In- Outputs.<br/>
<H4>Note: This lib works asynchron!</H4>
<hr>
Controll Digital and Analog signals:
<img src="https://github.com/Helmut-Saal/CC100-Node-Red/blob/master/Digital.png?raw=true" alt="Digital EA" height="250px" width="450px" align="left">
<img src="https://github.com/Helmut-Saal/CC100-Node-Red/blob/master/Analog.png?raw=true" alt="Analog EA" height="250px" width="450px">
<hr>
<br/>

Download example flow from Github:<br/>
```
https://github.com/Helmut-Saal/CC100-Node-Red/blob/master/examples/demo.json
 ```

<H4>Note: You have to run the Node-Red Container with privileged mode:</H4>
                                                                                                                             
 ```
docker run -d --name wago-node-red \
-d --privileged=true --user=root \
-p 1880:1880 \
-v node_red_user_data:/data \
nodered/node-red
 ```
