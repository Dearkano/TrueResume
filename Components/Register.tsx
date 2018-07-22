import * as React from "react";
import { Button, Table, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

export class Register extends React.Component<{}, { name, password, address }>{
    constructor(props) {
        super(props);
        this.state = { name: "", password: "", address:"" };
    }
    onNameChange(e) {
        this.setState({ name: e.target.value });
    }
    onPasswdChange(e) {
        this.setState({ password: e.target.value });
    }
    onAddressChange(e) {
        this.setState({ address: e.target.value });
    }
    async submit() {
        console.log(this.state.name);
        console.log(this.state.address);
        console.log(this.state.password);
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
    render() {
        return <div style={{ width: "30%", alignSelf:"center" }}><form>
            {this.FieldGroup({ id: "formControlsText", label: "UserName", type: "text", onChange: this.onNameChange.bind(this), help: null })}
            {this.FieldGroup({ id: "formControlsAddress", label: "Address", type: "text", onChange: this.onAddressChange.bind(this), help: null })}
            {this.FieldGroup({ id: "formControlsPassword", label: "Password", type: "password", help: null, onChange: this.onPasswdChange.bind(this) })}
            <Button onClick={this.submit.bind(this)}>Submit</Button>
        </form></div>
    }
}