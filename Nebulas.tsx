import * as md5 from "md5";
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

export async function addResume(args: string[]) {
    const url = "http://111.231.75.113:8685/v1/admin/sign ";
    const headers = { "Content-Type": "application/json" };
    let nonce = await getNonce(args[0]);
    const c = 1;
    console.log(nonce);
    nonce = parseInt(nonce) + c;
    console.log(nonce);
    const data = [{ nameHash: args[1], resume: args[2], resumeHash: args[3] }];
    const body = JSON.stringify({
        transaction: {
            from: args[0],
            to: getContractAddress(),
            value: "0",
            nonce: nonce,
            gasPrice: "1000000",
            gasLimit: "2000000",
            contract: { "function": "save", "args": JSON.stringify(data) }
        },
        passphrase: localStorage.getItem("AccountSecret")
    });
    const response = await fetch(url, { method: "POST", headers, body });
    const rs = await response.json();
    
    console.log(rs.result);
    const abi = rs.result.data;
    const _url = "https://mainnet.nebulas.io/v1/user/rawtransaction";
    const body1 = JSON.stringify({ data: abi });
    const _response = await fetch(_url, { method: "POST", headers, body:body1 });
}

export async function queryResume(nameHash) {
    const url = "https://mainnet.nebulas.io/v1/user/call";
    const headers = { "Content-Type": "application/json" };
    const nh = JSON.stringify([nameHash]);
    const account = localStorage.getItem("HCAccount");
    const body = JSON.stringify(
        {
            "from": account,
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
        { account: "n1QopLp3CrV9xZJtC7eF64kxDVhP3NTHruw", password: "zjutzj3160",secret:"zjutzj3160" },
        { account: "n1Y7qZ842hb3XhoqfzpMwyKWYNXYtixddPm", password: "123456789", secret: "123456789" },
        {account:"user",password:"123456",secret:""}
    ];
    for (let i in users) {
        if (users[i].account == account && users[i].password == password) {
            localStorage.setItem("HCAccount", users[i].account);
            localStorage.setItem("AccountSecret", users[i].secret);
            return true;
        }
    }
    return false;
}
