import * as md5 from "md5";
var request = require("request");
async function test() {
    //curl("https://api.hyperchain.cn/v1/token/gtoken", {})
}
async function HCFetch(_url, jsonStr) {
    const token = localStorage.getItem("token");
    const headers = { "Authorization": token, "Content-Type": "application/json", "Accept": "application/json", "Origin": "chrome-extension://eajclkbhbmkkkpbdedfhmeffeobjkgid" };
    const url = `https://api.hyperchain.cn/v1/` + _url;
    const response = await fetch(url, { method: "POST", headers, body: jsonStr });
    const data = await response.json();
    return data;
    /* request({
         url: url,
         method: "POST",
         headers: headers,
         body: jsonStr
     }, function (error, response, body1) {
         if (!error && response.statusCode == 200) {
             var body2 = JSON.parse(body1);
             var rs = body2.Cts;
             console.log(rs[0]);
             return rs[0];
         }
     }); 
     return null;*/
}

export async function GetToken() {
    const url = `https://api.hyperchain.cn/v1/token/gtoken`;
    const headers = { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" };
    const body = "phone=18868104684&password=tzj13999567168&client_id=c18f2ead-eeb8-4c0b-8378-b6c2ce129f57&client_secret=1108M45t16X2F399706f9p12cv10Pq3H";
    const response = await fetch(url, { method: "POST", headers, body });
    const data = await response.json();
    const token = data.access_token;
    console.log(token);
    localStorage.setItem("token", token);
    return token;
    /*request({
        url: url,
        method: "POST",
        headers: headers,
        body:body
    }, function (error, response, body1) {
        if (!error && response.statusCode == 200) {
            console.log(body1);
            var body2 = JSON.parse(body1);
            token = body2.access_token;
            console.log(token);
            localStorage.setItem("token", token);
        }
    }); */


    /* const option = {
         json: true,
         header: headers,
         body: body
     };
     request.post(url, option, function (error, response, body) {
         console.log(body);
     });
     */
}
function resultFunction(callback, error, response, body) {
    if (!error && response.statusCode === 200) {
        callback({ success: true, msg: body });
        console.log('request is success ');
    } else {
        console.log('request is error', error);
        callback({ success: false, msg: error });
    }
}
export async function CompileContract() {
    const contract = "contract Resume { struct Rsm{ bytes32 name; string val; string valhash; } mapping(bytes32=>Rsm) public data; function invoke(bytes32 userName, bytes32 _name,string _val,string _valhash){ Rsm resume ; resume.name=_name; resume.val=_val; resume.valhash=_valhash; data[_name]=resume; } function query(bytes32 userName,bytes32 name)returns(string){ if(name==userName){ return data[name].val; }else{ return data[name].valhash; } } } ";
    const url = "dev/contract/compile";
    const body = { "CTCode": contract };
    const data = await HCFetch(url, JSON.stringify(body));
    const CTS = data.Cts[0];
    const Abi = CTS.Abi;
    const Bin = CTS.Bin;
    localStorage.setItem("Abi", Abi);
    localStorage.setItem("Bin", Bin);
}

export async function DeployContract() {
    const addr = "be0d7d79dbd922bebc4aab63045ebee529f18395";
    localStorage.setItem("address", addr);
    const Bin = localStorage.getItem("Bin");
    const body = { "Bin": Bin, "From": addr };
    const url = "dev/contract/deploysync";
    const data = await HCFetch(url, JSON.stringify(body));
    const contractAddr = data.ContractAddress;
    localStorage.setItem("contractAddress", contractAddr);
}

export async function GetPayload(Args, func) {
    const Abi = localStorage.getItem("Abi");
    const body = { "Abi": Abi, "Args": Args, "Func": func };
    const url = "dev/payload";
    const data = await HCFetch(url, JSON.stringify(body));
    return data;
}
export async function InvokeContract(Args, func) {
    const url = "dev/contract/invokesync";
    const PayLoad = await GetPayload(Args, func);
    const From = localStorage.getItem("address");
    const To = localStorage.getItem("contractAddress");
    const body = { "Const": false, "PayLoad": PayLoad, "From": From, "To": To };
    const data = await HCFetch(url, JSON.stringify(body));
    return data;
}

export function FormData(Args: string[]) {
    //生成md5
    var str = Args[2].toString();
    console.log("formdata str=" + str);
    var hash = md5(str);
    console.log("zij=" + hash);
    Args.push(hash);
    console.log(Args);
    return Args;
}

export function Account(name, psw) {
    var accounts = [
        { name: "Vayne", password: "vayne" },
        { name: "Mana", password: "mana" },
        { name: "HR", password: "hr" },
        { name: "CA", password: "ca" },
        { name: "Myrcella", password: "myrcella" }
    ];
    for (var ac of accounts) {
        if (name === ac.name) {
            if (psw === ac.password) {
                if (name === 'Vayne') {
                    var data = {
                        name: "吴朝晖",
                        age: 52,
                        education: "浙江大学博士",
                        paper: 180,
                        patent: 120
                    }
                    localStorage.setItem("myResume", JSON.stringify(data));
                } else if (name === "Mana" && localStorage.getItem("seeacc") === "true") {
                    localStorage.setItem("seeacc", "false");
                }
                else if (name === "Mana") {
                    localStorage.removeItem("myResume");
                    localStorage.setItem("seeacc", "true");
                }
                return true;
            }
        }
    }
    return false;
}