import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import * as Nebulas from "../Nebulas"
import { Button, Table, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
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
    async handleLogin() {
        const status = await Nebulas.login(this.state.name, this.state.password);
        if (status == "success") {
            localStorage.setItem("HCAccount", this.state.name);
            localStorage.setItem("HCPassword", this.state.password);
            this.setState({ tip: "登陆成功" })
            document.location.href = "/";
        } else if (status == "nouser") {
            this.setState({ tip: "用户不存在" })
        } else {
            this.setState({ tip: "密码错误" })
        }
    }
    FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }
    componentDidMount() {
        if (localStorage.getItem("HCAccount"))
            document.location.href = "/";
    }
    render() {
        return <div className="column" style={{ alignItems:"center",width:"100%" }}> 
            {this.FieldGroup({ id: "formControlsText", label: "UserName", type: "text", onChange: this.handleNameChange.bind(this), help: null })}
            {this.FieldGroup({ id: "formControlsText", label: "Password", type: "password", onChange: this.handlePasswordChange.bind(this), help: null })}
            <p id="loginMessage">{this.state.tip}</p>
            <Button onClick={this.handleLogin.bind(this)}>登录</Button>
            <div style={{ width: "40rem", marginTop:"5rem" }}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>管理员帐户名</th>
                        <th>密码</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>manager</td>
                        <td>123456</td>
                    </tr>
                </tbody>
            </Table>
           </div>
        </div>;
    }
}