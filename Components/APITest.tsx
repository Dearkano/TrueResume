import * as React from "react";
import * as Utility from "../Utility";
import {Button } from 'react-bootstrap';
export class APITest extends React.Component<{}, { token }>{
    constructor(props) {
        super(props);
        this.state = { token: "" };
    }

    async login() {
        const token = await Utility.login("Mana", "org1");

        this.setState({ token: token });
    }
    async createChannel() {
        await Utility.createChannel(this.state.token);
    }
    async joinChannel() {
        await Utility.joinChannel(this.state.token);
    }
    async installChaincode() {
        await Utility.installChaincode(this.state.token);
    }
    async instantiateChaincode() {
        await Utility.instantiateChaincode(this.state.token);
    }
    async invoke() {
        await Utility.invoke(this.state.token);
    }
    async query() {
        await Utility.query(this.state.token);
    }
    render() {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

        const buttonsInstance = (
            <div className="well" style={wellStyles}>
                <Button onClick={this.login.bind(this)} bsSize="large" block>
                    login
    </Button>
                <Button onClick={this.createChannel.bind(this)} bsSize="large" block>
                    createChannel
    </Button>
                <Button onClick={this.joinChannel.bind(this)} bsSize="large" block>
                    joinChannel
    </Button>
                <Button onClick={this.installChaincode.bind(this)} bsSize="large" block>
                    installChaincode
    </Button>
                <Button onClick={this.instantiateChaincode.bind(this)} bsSize="large" block>
                    instantiateChaincode
    </Button>
                <Button onClick={this.invoke.bind(this)} bsSize="large" block>
                    invoke
    </Button>
                <Button onClick={this.query.bind(this)} bsSize="large" block>
                    query
    </Button>
            </div>
        );
        return <div style={{ display: "flex", flexDirection: "column" }}>
            <div>token = {this.state.token}</div>
            {buttonsInstance}
        </div>

            ;
    }

}