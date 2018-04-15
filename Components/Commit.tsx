import * as React from "react";
import * as Utility from "../Utility";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />        
        </FormGroup>
    );
}
export class Commit extends React.Component<{}, {}> {

    render() {
        return <form>
            <FieldGroup
                id="name"
                type="text"
                label="Text"
                placeholder="Enter text"
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
            />
            </form>
;
    }
}