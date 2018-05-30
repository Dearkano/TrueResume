import * as md5 from "md5";
import * as NebPay from "nebpay";
import * as $ from 'jquery';
export function formData(Args: string[]) {
    //生成md5
    var resume = Args[2].toString();
    var address = Args[0];
    var resumeHash = md5(resume);
    console.log("on chain = " + resume);
    console.log("on chain hash = " + resumeHash);
    var nameHash = md5(Args[1]);
    var args = [address, nameHash, resume, resumeHash];
    return args;
}

function getContractAddress() {
    return "n1rkPbRrsvesLJFS8HqUBmXE3ZrxSCLqGih";
}

export async function getNonce(address) {
    const url = "https://mainnet.nebulas.io/v1/user/accountstate";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ "address": address });
    const response = await fetch(url, { method: "POST", headers, body });
    const data = await response.json();
    const nonce = data.result.nonce;
    return nonce;
}
var intervalQuery;
export async function addResume(args: string[]) {
    var nebPay = new NebPay();
    var serialNumber; //交易序列号
    var intervalQuery; //定时查询交易结果
    var to = "n1rkPbRrsvesLJFS8HqUBmXE3ZrxSCLqGih";   //Dapp的合约地址
    var value = "0";
    var callFunction = "save" //调用的函数名称
    const data = [{ nameHash: args[1], resume: args[2], resumeHash: args[3] }];
    var callArgs = JSON.stringify(data);  //参数格式为参数数组的JSON字符串, 比如'["arg"]','["arg1","arg2]'        
   

    //发送交易(发起智能合约调用)
    serialNumber = nebPay.call(to, value, callFunction, callArgs);

    //设置定时查询交易结果
    intervalQuery = setInterval(function () {
        funcIntervalQuery(serialNumber,null);
    }, 10000); //建议查询频率10-15s,因为星云链出块时间为15s,并且查询服务器限制每分钟最多查询10次。


    //const url = "http://111.231.75.113:8685/v1/admin/sign ";
    //const headers = { "Content-Type": "application/json" };
    //let nonce = await getNonce(args[0]);
    //const c = 1;
    //console.log(nonce);
    //nonce = parseInt(nonce) + c;
    //console.log(nonce);
    //const data = [{ nameHash: args[1], resume: args[2], resumeHash: args[3] }];
    //const body = JSON.stringify({
    //    transaction: {
    //        from: args[0],
    //        to: getContractAddress(),
    //        value: "0",
    //        nonce: nonce,
    //        gasPrice: "1000000",
    //        gasLimit: "2000000",
    //        contract: { "function": "save", "args": JSON.stringify(data) }
    //    },
    //    passphrase: localStorage.getItem("AccountSecret")
    //});
    //const response = await fetch(url, { method: "POST", headers, body });
    //const rs = await response.json();
    
    //console.log(rs.result);
    //const abi = rs.result.data;
    //const _url = "https://mainnet.nebulas.io/v1/user/rawtransaction";
    //const body1 = JSON.stringify({ data: abi });
    //const _response = await fetch(_url, { method: "POST", headers, body:body1 });
}
function funcIntervalQuery(serialNumber, options) {
    var nebPay = new NebPay();
    //queryPayInfo的options参数用来指定查询交易的服务器地址,(如果是主网可以忽略,因为默认服务器是在主网查询)
    nebPay.queryPayInfo(serialNumber, options)   //search transaction result from server (result upload to server by app)
        .then(function (resp) {
            console.log("tx result: " + resp)   //resp is a JSON string
            var respObject = JSON.parse(resp)
            //code==0交易发送成功, status==1交易已被打包上链
            if (respObject.code === 0 && respObject.data.status === 1) {
                //交易成功,处理后续任务....
                $("#txtip").text("交易已完成，您现在可以去验证简历");
                document.location.href = "/usercenter";
                
                clearInterval(intervalQuery)    //清除定时查询
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

export async function queryResume(nameHash) {
    const url = "https://mainnet.nebulas.io/v1/user/call";
    const headers = { "Content-Type": "application/json" };
    const nh = JSON.stringify([nameHash]);
    const account = localStorage.getItem("HCAccount");
    const body = JSON.stringify(
        {
            "from": "n1bz1jRkWC37Ka2xZY3zQhhLn3C5PfYpG9p",
            "to": getContractAddress(),
            "value": "0",
            "nonce": 0,
            "gasPrice": "1000000",
            "gasLimit": "2000000",
            "contract": {
                "function": "query", "args": nh
            }
        });
    const response = await fetch(url, { method: "POST", headers, body });
    const data = await response.json();
    return data;
}

export function login(account, password) {
    const users = [
        { account: "user", password: "iamuser" },
        { account: "manager", password: "iammanager" },
    ];
    for (let i in users) {
        if (users[i].account == account && users[i].password == password) {
            localStorage.setItem("HCAccount", users[i].account);
            return true;
        }
    }
    return false;
}
