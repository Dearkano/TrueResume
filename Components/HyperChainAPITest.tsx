import * as React from "react";
import * as Hyperchain from "../Hyperchain";
import { Button, Table, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import { lchmod } from 'fs';
export class HyperChainAPITest extends React.Component<{}, {tip, dat,token ,result}>{
    constructor(props) {
        super(props);
        this.state = {
            token: "", result: "", tip: "初始化状态", dat: {name:"",age:""}};
    }

    async login() {
        const token = await Hyperchain.GetToken();
        this.setState({ token: token,tip:"登陆成功" });
    }
    async compileContract() {
        await Hyperchain.CompileContract();
        this.setState({ tip: "编译合约成功" });
    }
    async deployContract() {
        await Hyperchain.DeployContract();
        this.setState({ tip: "部署合约成功" });
    }
    async invokeContract() {
        const rs = {
            name: "吴朝晖",
            age: "52",
            education: "浙江大学博士",
            paper: "180",
            patent:"120"
        }
        const Args = Hyperchain.FormData(["Vayne", "吴朝晖", JSON.stringify(rs)]);
        console.log(JSON.stringify(rs));
        await Hyperchain.InvokeContract(Args, "invoke");
        this.setState({ tip: "调用合约成功" });
    }
    async queryContract() {
        const Args = ["Vayne", this.state.dat.name];
        console.log(Args);
        const data =await Hyperchain.InvokeContract(Args, "query");
        const ret:string = data.Ret;
        var r = ret.substring(2);
        const buf = new Buffer(r, 'hex');
        const s = buf.toString();
        this.setState({ result: s, tip: "查询成功 参数为" + Args.toString() });
    }
    async queryMyself() {
        const Args = ["Mana", "Mana"];
        const data = await Hyperchain.InvokeContract(Args, "query");
        const ret: string = data.Ret;
        var r = ret.substring(2);
        const buf = new Buffer(r, 'hex');
        const s = buf.toString();
        this.setState({ result: s, tip: "查询成功 参数为" + Args.toString()  });
    }

    handleNameChange(e) {
        var t = { name: e.target.value, age: this.state.dat.age }
        this.setState({ dat: t });
    }
    handleAgeChange(e) {
        var t = { name: this.state.dat.name, age: e.target.value }
        this.setState({ dat: t });
    }
    render() {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

        const buttonsInstance = (
            <div className="well" style={wellStyles}>
                <Button onClick={this.login.bind(this)} bsSize="large" block>
                    登陆
    </Button>
                <Button onClick={this.compileContract.bind(this)} bsSize="large" block>
                    编译合约
    </Button>
                <Button onClick={this.deployContract.bind(this)} bsSize="large" block>
                    部署合约
    </Button>
                <Button onClick={this.invokeContract.bind(this)} bsSize="large" block>
                    调用合约
    </Button>
                <Button onClick={this.queryContract.bind(this)} bsSize="large" block>
                    查询合约
    </Button>
                <Button onClick={this.queryMyself.bind(this)} bsSize="large" block>
                    查询自己
    </Button>
              
            </div>
        );
        return <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around" }}>
            <div>{buttonsInstance}</div>
            <div>
                <div className="form-group">
                    <label htmlFor="username">姓名：</label>
                    <input type="text" value={this.state.dat.name} onChange={this.handleNameChange.bind(this)} />
                </div>
              
                 
          

           
</div>
            <div><Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>条目</th>
                        <th>内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Token</td>
                        <td>{this.state.token}</td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>{this.state.result}</td>
                    </tr>   
                    <tr>
                        <td>State</td>
                        <td>{this.state.tip}</td>
                    </tr>   
                </tbody>
            </Table></div>
        </div>

            ;
    }

}