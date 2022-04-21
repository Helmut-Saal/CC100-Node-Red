# CC100-Node-Red
<b>node-red-contrib-wago-cc100</b><br/>
<H3>Node-Red library to controll EA's on CC100</H3>

Directly read and set the Digital In- Outputs and also Analog In- Outputs.<br/>
<H4>Note: This Libs works asynchron!</H4>
<hr>
Controll Digital and Analog signals:
<hr>
<img src="https://github.com/Helmut-Saal/CC100-Node-Red/blob/master/Digital.png" alt="Digital EA" height="200px" width="400px" align="left">
<img src="https://github.com/Helmut-Saal/CC100-Node-Red/blob/master/Analog.png" alt="Analog EA" height="200px" width="400px" align="right">
<hr>
Download example flow:
```
[
    {
        "id": "cf11c07bb539e1de",
        "type": "tab",
        "label": "CC 100",
        "disabled": false,
        "info": ""
    },
    {
        "id": "10c8c4b663d0024e",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "x": 130,
        "y": 60,
        "wires": [
            [
                "4b66344519d25a5f"
            ]
        ]
    },
    {
        "id": "b6819282389e6f18",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 60,
        "wires": []
    },
    {
        "id": "78d533233432145e",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "4b66344519d25a5f"
            ]
        ]
    },
    {
        "id": "0f4ebb5a8f999a60",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "94990cb08c2b1059"
            ]
        ]
    },
    {
        "id": "d19b78fc1550e050",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 130,
        "y": 180,
        "wires": [
            [
                "94990cb08c2b1059"
            ]
        ]
    },
    {
        "id": "f3aa028d33e8f367",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "x": 130,
        "y": 220,
        "wires": [
            [
                "51035f507adec93c"
            ]
        ]
    },
    {
        "id": "5f9fb903020abe5c",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 130,
        "y": 260,
        "wires": [
            [
                "51035f507adec93c"
            ]
        ]
    },
    {
        "id": "71ee8625bae03c3f",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "x": 130,
        "y": 300,
        "wires": [
            [
                "3efc56297febfbfd"
            ]
        ]
    },
    {
        "id": "555745038d6d604f",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 130,
        "y": 340,
        "wires": [
            [
                "3efc56297febfbfd"
            ]
        ]
    },
    {
        "id": "d98a0abcb03f80a3",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 760,
        "wires": [
            [
                "855a132412ccb112"
            ]
        ]
    },
    {
        "id": "e33801ccf2f42e1e",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 740,
        "wires": []
    },
    {
        "id": "ee51bd616f2a7943",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 860,
        "wires": []
    },
    {
        "id": "9d14712a263d11f2",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 800,
        "wires": []
    },
    {
        "id": "0a8115b1ae965bdc",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 920,
        "wires": []
    },
    {
        "id": "c79ba8527f13f74f",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 980,
        "wires": []
    },
    {
        "id": "2f06773e80255eb3",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 140,
        "wires": []
    },
    {
        "id": "2c5e12d148c51d5d",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 220,
        "wires": []
    },
    {
        "id": "1e04693d3b7d0480",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 300,
        "wires": []
    },
    {
        "id": "c0b9a874d0fd9172",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 440,
        "wires": [
            [
                "ebe29a3cf66c0f09"
            ]
        ]
    },
    {
        "id": "c43d3527f65070d8",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 420,
        "wires": []
    },
    {
        "id": "d34ff8c56bc8514d",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 480,
        "wires": []
    },
    {
        "id": "cf109a5dc5c4557e",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 540,
        "wires": []
    },
    {
        "id": "d4d2ee74add68907",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 600,
        "wires": []
    },
    {
        "id": "d5c93adbf21bcf85",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 660,
        "wires": []
    },
    {
        "id": "8dc135c9d174de6e",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1040,
        "wires": []
    },
    {
        "id": "3ff8b27128ca218f",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1100,
        "wires": []
    },
    {
        "id": "356240e030c24b24",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1160,
        "wires": []
    },
    {
        "id": "133fa1cfdbaa035d",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1220,
        "wires": []
    },
    {
        "id": "4b66344519d25a5f",
        "type": "Set-DO1",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 380,
        "y": 60,
        "wires": [
            [
                "b6819282389e6f18"
            ]
        ]
    },
    {
        "id": "94990cb08c2b1059",
        "type": "Set-DO2",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 380,
        "y": 140,
        "wires": [
            [
                "2f06773e80255eb3"
            ]
        ]
    },
    {
        "id": "51035f507adec93c",
        "type": "Set-DO3",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 380,
        "y": 220,
        "wires": [
            [
                "2c5e12d148c51d5d"
            ]
        ]
    },
    {
        "id": "3efc56297febfbfd",
        "type": "Set-DO4",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 380,
        "y": 300,
        "wires": [
            [
                "1e04693d3b7d0480"
            ]
        ]
    },
    {
        "id": "ebe29a3cf66c0f09",
        "type": "Read-DO",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 380,
        "y": 440,
        "wires": [
            [
                "c43d3527f65070d8"
            ],
            [
                "d34ff8c56bc8514d"
            ],
            [
                "cf109a5dc5c4557e"
            ],
            [
                "d4d2ee74add68907"
            ],
            [
                "d5c93adbf21bcf85"
            ]
        ]
    },
    {
        "id": "855a132412ccb112",
        "type": "Read-DI",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 380,
        "y": 760,
        "wires": [
            [
                "e33801ccf2f42e1e"
            ],
            [
                "9d14712a263d11f2"
            ],
            [
                "ee51bd616f2a7943"
            ],
            [
                "0a8115b1ae965bdc"
            ],
            [
                "c79ba8527f13f74f"
            ],
            [
                "8dc135c9d174de6e"
            ],
            [
                "3ff8b27128ca218f"
            ],
            [
                "356240e030c24b24"
            ],
            [
                "133fa1cfdbaa035d"
            ]
        ]
    },
    {
        "id": "5b9d6ad3dac0e937",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "5",
        "payloadType": "num",
        "x": 130,
        "y": 1300,
        "wires": [
            [
                "344fc97616444c77"
            ]
        ]
    },
    {
        "id": "2cd7b79ea6e10d0f",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "5.5",
        "payloadType": "num",
        "x": 130,
        "y": 1340,
        "wires": [
            [
                "344fc97616444c77"
            ]
        ]
    },
    {
        "id": "f85f151c732f0ece",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "10",
        "payloadType": "num",
        "x": 130,
        "y": 1380,
        "wires": [
            [
                "344fc97616444c77"
            ]
        ]
    },
    {
        "id": "add4fbe10f8ad5a8",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1380,
        "wires": []
    },
    {
        "id": "344fc97616444c77",
        "type": "Set-AO1",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 400,
        "y": 1380,
        "wires": [
            [
                "add4fbe10f8ad5a8"
            ]
        ]
    },
    {
        "id": "df8fdf910d94896a",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 130,
        "y": 1220,
        "wires": [
            [
                "344fc97616444c77"
            ]
        ]
    },
    {
        "id": "5c7e5771cdf86920",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "2.5",
        "payloadType": "num",
        "x": 130,
        "y": 1260,
        "wires": [
            [
                "344fc97616444c77"
            ]
        ]
    },
    {
        "id": "3eb93101a85b9e75",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "5",
        "payloadType": "num",
        "x": 130,
        "y": 1540,
        "wires": [
            [
                "3916b040b2c8b693"
            ]
        ]
    },
    {
        "id": "5eac5efe65299126",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "5.5",
        "payloadType": "num",
        "x": 130,
        "y": 1580,
        "wires": [
            [
                "3916b040b2c8b693"
            ]
        ]
    },
    {
        "id": "a0b1c387de3542fd",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "10",
        "payloadType": "num",
        "x": 130,
        "y": 1620,
        "wires": [
            [
                "3916b040b2c8b693"
            ]
        ]
    },
    {
        "id": "68a718e985b2db08",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1460,
        "wires": []
    },
    {
        "id": "f84dd4dd9aa58c61",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 130,
        "y": 1460,
        "wires": [
            [
                "3916b040b2c8b693"
            ]
        ]
    },
    {
        "id": "883bd0be1f9923a4",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "2.5",
        "payloadType": "num",
        "x": 130,
        "y": 1500,
        "wires": [
            [
                "3916b040b2c8b693"
            ]
        ]
    },
    {
        "id": "3916b040b2c8b693",
        "type": "Set-AO2",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 400,
        "y": 1460,
        "wires": [
            [
                "68a718e985b2db08"
            ]
        ]
    },
    {
        "id": "2b95cf12f2f677c9",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 1800,
        "wires": [
            [
                "a097059fdbc4dee0"
            ]
        ]
    },
    {
        "id": "c0b19ce0b48c61ed",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1800,
        "wires": []
    },
    {
        "id": "d8a8ae3a3797b90b",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1860,
        "wires": []
    },
    {
        "id": "a097059fdbc4dee0",
        "type": "Read-AI1",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 400,
        "y": 1800,
        "wires": [
            [
                "c0b19ce0b48c61ed"
            ]
        ]
    },
    {
        "id": "47041e95a1d98510",
        "type": "Read-AI2",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 400,
        "y": 1860,
        "wires": [
            [
                "d8a8ae3a3797b90b"
            ]
        ]
    },
    {
        "id": "454724d5b1cc80a5",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 1860,
        "wires": [
            [
                "47041e95a1d98510"
            ]
        ]
    },
    {
        "id": "3f405a6ff3590b74",
        "type": "Read-PT1",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 410,
        "y": 1960,
        "wires": [
            [
                "4b4e2ff7150c3093"
            ]
        ]
    },
    {
        "id": "1f99b64337711927",
        "type": "Read-PT2",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 410,
        "y": 2020,
        "wires": [
            [
                "654b099024dcc43d"
            ]
        ]
    },
    {
        "id": "4b4e2ff7150c3093",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1960,
        "wires": []
    },
    {
        "id": "654b099024dcc43d",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 2020,
        "wires": []
    },
    {
        "id": "8c155dc476cee862",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 1960,
        "wires": [
            [
                "3f405a6ff3590b74"
            ]
        ]
    },
    {
        "id": "c92023cebd637e3d",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 2020,
        "wires": [
            [
                "1f99b64337711927"
            ]
        ]
    },
    {
        "id": "615d7cd87f51a288",
        "type": "inject",
        "z": "cf11c07bb539e1de",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 1700,
        "wires": [
            [
                "1670eeaaef5a4d5b"
            ]
        ]
    },
    {
        "id": "74b1ecd10cfca4a0",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1640,
        "wires": []
    },
    {
        "id": "1670eeaaef5a4d5b",
        "type": "Read-AO",
        "z": "cf11c07bb539e1de",
        "name": "",
        "x": 400,
        "y": 1700,
        "wires": [
            [
                "74b1ecd10cfca4a0"
            ],
            [
                "ad90a28f46cb8651"
            ]
        ]
    },
    {
        "id": "ad90a28f46cb8651",
        "type": "debug",
        "z": "cf11c07bb539e1de",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": true,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "payload",
        "statusType": "auto",
        "x": 870,
        "y": 1700,
        "wires": []
    }
]
```

Note: You have to run the Node-Red Container with privileged mode:
 ```
docker run -d --name wago-node-red \
-d --privileged=true --user=root \
-p 1880:1880 \
-v node_red_user_data:/data \
wagoautomation/node-red-cc100:0.0.6
 ```
