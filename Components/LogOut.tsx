import * as React from "react";

export class LogOut extends React.Component<{}, {}>{
    componentDidMount() {
        localStorage.removeItem("HCAccount");
        localStorage.removeItem("HCPassword");
        localStorage.removeItem("AccountSecret");
        document.location.href = "/";
    }
    render() {
        return <div>正在注销...</div>;
    }
}