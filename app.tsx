import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Utilty from "./Utility";

export class App extends React.Component<{}, { token }>{
    constructor(props) {
        super(props);
        this.state = { token: "" };
    }
    async login() {
        const token = await Utilty.login("Jim", "Org1");

        this.setState({ token: token});
    }
    async createChannel() {
        await Utilty.createChannel(this.state.token);
    }
    async joinChannel() {
        await Utilty.joinChannel(this.state.token);
    }
    async installChaincode() {
        await Utilty.installChaincode(this.state.token);
    }
    async instantiateChaincode() {
        await Utilty.instantiateChaincode(this.state.token);
    }
    async invoke() {
        await Utilty.invoke(this.state.token);
    }
    async query() {
        await Utilty.query(this.state.token);
    }
    render() {
        return <div style={{ display: "flex", flexDirection: "column" }}>
            <div>token = {this.state.token}</div>
            <div onClick={this.login.bind(this)}>login</div>
            <div onClick={this.createChannel.bind(this)}>createChannel</div>
            <div onClick={this.joinChannel.bind(this)}>joinChannel</div>
            <div onClick={this.installChaincode.bind(this)}>installChaincode</div>
            <div onClick={this.instantiateChaincode.bind(this)}>instantiateChaincode</div>
            <div onClick={this.invoke.bind(this)}>invoke</div>
            <div onClick={this.query.bind(this)}>query</div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

);