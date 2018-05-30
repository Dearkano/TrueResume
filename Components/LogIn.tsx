import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import * as Nebulas from "../Nebulas"
import { Button,Table} from 'react-bootstrap';
import { win32 } from 'path';
export class LogIn extends React.Component<{}, { name, password ,tip}>{
    constructor(props) {
        super(props);
        this.state = { name: "", password: "" ,tip:""};
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    handleLogin() {
        if (Nebulas.login(this.state.name, this.state.password)) {
            localStorage.setItem("HCAccount", this.state.name);
            localStorage.setItem("HCPassword", this.state.password);
            this.setState({ tip: "登陆成功" })
      
        } else {
            this.setState({ tip: "登陆失败" })
        }
    }
    componentDidMount() {
        if (localStorage.getItem("HCAccount"))
            document.location.href = "/";
    }
    render() {
        return <div className="column" style={{ alignItems:"center",width:"100%" }}> <form onSubmit={this.handleLogin.bind(this)} autoComplete="on">
            <div className="login-form">
                <p>用户名</p><input name="username" type="text" id="loginName" onChange={this.handleNameChange.bind(this)} value={this.state.name} autoComplete="username" />
            </div>
            <div className="login-form">
                <p>密码</p><input name="password" type="password" id="loginPassword" onChange={this.handlePasswordChange.bind(this)} autoComplete="current-password" />
            </div>
            <p id="loginMessage">{this.state.tip}</p>
            <Button type="submit">登录</Button>
        </form>
            <div style={{ width: "30%", marginTop:"40px" }}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>账号</th>
                        <th>密码</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>user</td>
                            <td>iamuser</td>
                        </tr>
                        <tr>
                            <td>manager</td>
                            <td>iammanager</td>
                        </tr>
                          
                        
                </tbody>
                </Table>
                </div>
        </div>;
    }
}