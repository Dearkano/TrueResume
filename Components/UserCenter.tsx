import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import * as Nebulas from "../Nebulas";
import * as $ from 'jquery';
import { Table, Button } from 'react-bootstrap';
import { lchmod } from 'fs';
export class UserCenter extends React.Component<{}, { data }>{
    constructor(props) {
        super(props);
        this.state = { data: [] };

    }
    async componentDidMount() {
        const data = await Nebulas.getReqs();
        this.setState({ data: data });
    }
    async accept(item) {
        let cid = `#accept_${item.id}`;
        let rid = `#reject_${item.id}`;
        let tid = `#txtip_${item.id}`;
        console.log(item);
        const data = JSON.parse(item.resume);
        console.log(data);
        // await Hyperchain.InvokeContract(Hyperchain.FormData(JSON.parse(Args)), "invoke");
        const args = await Nebulas.addResume(data,item.id);
        localStorage.setItem("myResumeState", "accept");
        //localStorage.removeItem("myResumeData");
        $(cid).attr("disabled", true);
        $(rid).attr("disabled", true);
        $(tid).text("交易已发送，验证交易完成后，您可以去验证简历");
    }
    refuse() {
        localStorage.setItem("myResumeState", "refuse");
        localStorage.removeItem("myResumeData");
        document.location.href = "/usercenter";
    }
    convertReqUI(item) {
        console.log(item);
        const data = JSON.parse(item.resume);
        console.log(data);
        const resume =data.resume
        console.log(resume);
        let cid = `accept_${item.id}`;
        let rid = `reject_${item.id}`;
        let tid = `txtip_${item.id}`;
        return <div className="column" style={{ marginBottom:"3rem", width: "50%", alignItems: "center" }}> <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th style={{width:"10rem"}}>条目</th>
                    <th style={{width:"40rem"}}>内容</th>
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
            <div className="row" style={{ width: "100%", justifyContent: "space-between" }}>
                <Button style={{ marginTop: "25px", width: "200px" }} bsStyle="success" id={cid} onClick={this.accept.bind(this, item)}>通过</Button>
                <Button style={{ marginTop: "25px", width: "200px" }} bsStyle="danger" id={rid} onClick={this.refuse.bind(this)}>拒绝</Button>
            </div>
            <div id={tid}></div>
        </div>
    }
    render() {
        console.log("我又进来啦");
        if (localStorage.getItem("HCAccount") != "manager") {
            return <div>您没有权限</div>
        }
        let Args = null;
        let UI = <div className="column"><h1>当前没有需要审核的简历</h1></div>;
        let state = localStorage.getItem("myResumeState");
        console.log(state);

       
        UI = this.state.data.map(this.convertReqUI.bind(this));

        return <div className="column" style={{ width: "100%", alignItems: "center" }}>{UI}</div>;
    }
}