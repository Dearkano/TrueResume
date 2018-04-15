/**
 * {
  "success": true,
  "secret": "RaxhMgevgJcm",
  "message": "Jim enrolled Successfully",
  "token": "<put JSON Web Token here>"
}
 * @param name
 * @param org
 */
export async function login(name,org) {
    const url = `http://47.100.192.19:4010/users`;
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    const body = 'username='+name+'&orgName='+org;
    const response = await fetch(url, { method: "POST", headers, body });
    const data = await response.json();
    return data.token;
}
export function trim(str) {
    return str.replace(/\s|\xA0|\x00/g, "");
}
export function outASCii(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        console.log(parseInt(c));
    }
}
export function strlen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
}
export async function createChannel(token) {
    const url = 'http://47.100.192.19:4010/channels';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const body = {
        "channelName": "mychannel",
        "channelConfigPath": "../artifacts/channel/mychannel.tx"
    };
    const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(body)  });
    return await response.json();
}


export async function joinChannel(token) {
    const url = 'http://47.100.192.19:4010/channels/mychannel/peers';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const body = {
        "peers": [
            "peer0.org1.example.com",   
            "peer1.org1.example.com",
          
        ]
    };
    const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(body)  });
    return await response.json();
}


export async function installChaincode(token) {
    const url = 'http://47.100.192.19:4010/chaincodes';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const body = {
        "peers": ["peer0.org1.example.com", "peer1.org1.example.com" ,],
        "chaincodeName": "mycc",
        "chaincodePath": "github.com/example_cc/go",
        "chaincodeType": "golang",
        "chaincodeVersion": "v0"
    };
    const response = await fetch(url, { method: "POST", headers, body:JSON.stringify(body) });
    return await response.json();
}


export async function instantiateChaincode(token) {
    const url = 'http://47.100.192.19:4010/channels/mychannel/chaincodes';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const body = {
        "peers": ["peer0.org1.example.com", "peer1.org1.example.com" ],
        "chaincodeName": "mycc",
        "chaincodeVersion": "v0",
        "chaincodeType": "golang",
        "args": ["a", "100", "b", "200"]
    };
    const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(body)  });
    return await response.json();
}

export async function invoke(token) {
    const url = 'http://47.100.192.19:4010/channels/mychannel/chaincodes/mycc';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const body = {
        "peers": ["peer0.org1.example.com", "peer1.org1.example.com" ],
        "fcn": "move",
        "args": ["a", "b", "10"]
    };
    const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(body)  });
    return await response.json();
}

export async function query(token) {
    const url = 'http://47.100.192.19:4010/channels/mychannel/chaincodes/mycc?peer=peer0.org1.example.com&fcn=query&args=%5B%22a%22%5D';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, {headers});
    return await response.json();
}

export async function queryBlock(token,id) {
    const url = 'http://47.100.192.19:4010/channels/mychannel/blocks/'+id+'?peer=peer0.org1.example.com';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, { headers });
    return await response.json();
}

export async function queryTraction(token, id) {
    const url = 'http://47.100.192.19:4010/channels/mychannel/transactions/' + id + '?peer=peer0.org1.example.com';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, { headers });
    return await response.json();
}

export async function queryChainInfo(token) {
    const url = 'http://47.100.192.19:4010/channels/mychannel?peer=peer0.org1.example.com';
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, { headers });
    return await response.json();
}

export async function queryInstalledChaincode(token) {
    const url = "http://47.100.192.19:4010/chaincodes?peer=peer0.org1.example.com&type=installed";
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, { headers });
    return await response.json();
}

export async function queryInstantiatedChaincode(token) {
    const url = "http://47.100.192.19:4010/chaincodes?peer=peer0.org1.example.com&type=instantiated";
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, { headers });
    return await response.json();
}

export async function queryChannels(token) {
    const url = "http://47.100.192.19:4010/channels?peer=peer0.org1.example.com";
    const headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    const response = await fetch(url, { headers });
    return await response.json();
}
