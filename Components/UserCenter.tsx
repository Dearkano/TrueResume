import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import * as Nebulas from "../Nebulas";
import * as $ from 'jquery';
import { Table, Button } from 'react-bootstrap';
export class UserCenter extends React.Component<{}, {}>{
    async accept() {
        const Args = JSON.parse(localStorage.getItem("myResumeData"));
        Args[0] = localStorage.getItem("HCAccount");
       // await Hyperchain.InvokeContract(Hyperchain.FormData(JSON.parse(Args)), "invoke");
        const args = await Nebulas.addResume(Args);
        localStorage.setItem("myResumeState", "accept");
        //localStorage.removeItem("myResumeData");
        $("#acceptR").attr("disabled", true);   
        $("#rejectR").attr("disabled", true);  
        $("#txtip").text("交易已发送，验证交易完成后，您可以去验证简历");
    }
    refuse() {
        localStorage.setItem("myResumeState", "refuse");
        localStorage.removeItem("myResumeData");
        document.location.href = "/usercenter";
    }
    render() {
        if (localStorage.getItem("HCAccount") != "manager") {
            return <div>您没有权限</div>
        }
        let Args = null;
        let UI = <div className="column"><h1>当前没有需要审核的简历</h1></div>;
        let state = localStorage.getItem("myResumeState");
        console.log(state);
        if (state=="wait") {
            Args = localStorage.getItem("myResumeData");
            const resume = JSON.parse(JSON.parse(Args)[2]);
            UI = <div className="column" style={{ alignItems:"center" }}> <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>条目</th>
                        <th>内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>姓名</td>
                        <td>{resume.name}</td>
                    </tr>
                    <tr>
                        <td>年龄</td>
                        <td>{resume.age}</td>
                    </tr>
                    <tr>
                        <td>学历</td>
                        <td >{resume.education}</td>
                    </tr>
                    <tr>
                        <td>论文数量</td>
                        <td >{resume.paper}</td>
                    </tr>
                    <tr>
                        <td>专利数量</td>
                        <td >{resume.patent}</td>
                    </tr>                    
                </tbody>
            </Table>
                <Button style={{ marginTop: "25px", width: "200px" }}  bsStyle="success" id="acceptR" onClick={this.accept.bind(this)}>通过</Button>
                <Button style={{ marginTop: "25px", width: "200px" }} bsStyle="danger" id="rejectR" onClick={this.refuse.bind(this)}>拒绝</Button>
                <div id="txtip"></div>
                </div>;
        }
        return <div>{UI}</div>;
    }
}