import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import * as Nebulas from "../Nebulas"
import * as md5 from 'md5';
import { Table, Button, ProgressBar } from 'react-bootstrap';
import { NEG_ONE } from 'long';
interface Resume {
    name: string,
    age: string,
    education: string,
    paper: string,
    patent: string
}
export class MyResume extends React.Component<{}, { resume: Resume }>{
    constructor(Props) {
        super(Props);
        this.state = {
            resume: { name: "", age: "", education: "", paper: "", patent: "" }
        }
    }
    async createResume() {
        const jstr = JSON.stringify(this.state.resume);
        localStorage.setItem("myResume", jstr);
        const curUser = localStorage.getItem("HCAccount");
        const resumeHash = md5(jstr);
        const nameHash = md5(this.state.resume.name);
        let Args = {
            resume: this.state.resume,
            name: nameHash,
            resumeHash:resumeHash
        };
        localStorage.setItem("myResumeData", JSON.stringify(Args));
        localStorage.setItem("myResumeState", "wait");
        await Nebulas.handoutReq(curUser, JSON.stringify(Args));
        document.location.href = "/myresume";
    }
    handleNameChange(e) {
        var t = this.state.resume;
        t.name = e.target.value;
        this.setState({ resume: t });
    }
    handleAgeChange(e) {
        var t = this.state.resume;
        t.age = e.target.value;
        this.setState({ resume: t });
    }
    handleEducationChange(e) {
        var t = this.state.resume;
        t.education = e.target.value;
        this.setState({ resume: t });
    }
    handlePaperChange(e) {
        var t = this.state.resume;
        t.paper = e.target.value;
        this.setState({ resume: t });
    }
    handlePatentChange(e) {
        var t = this.state.resume;
        t.patent = e.target.value;
        this.setState({ resume: t });
    }
    nextResume() {
        localStorage.removeItem("myResume");
        localStorage.removeItem("myResumeData");
        document.location.href = "/myresume";
    }
    render() {
        if (!localStorage.getItem("HCAccount")) {
            return <h2 style={{ display: "flex", justifyContent:"center" }}>您还未登录 请先<a href="/login">登陆</a>哦</h2>
        }
        if (!localStorage.getItem("myResume")) {
            return <div style={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
            }}>
                <h2>您还没有属于自己的简历，先创建一份吧^_^</h2>
                <div>
                    <div className="form-group">
                        <label htmlFor="username">姓名：</label>
                        <input type="text" value={this.state.resume.name} onChange={this.handleNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">年龄：</label>
                        <input type="text" value={this.state.resume.age} onChange={this.handleAgeChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="education">教育：</label>
                        <input type="text" value={this.state.resume.education} onChange={this.handleEducationChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paper">论文：</label>
                        <input type="text" value={this.state.resume.paper} onChange={this.handlePaperChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="patent">专利：</label>
                        <input type="text" value={this.state.resume.patent} onChange={this.handlePatentChange.bind(this)} />
                    </div>

                    <Button onClick={this.createResume.bind(this)}>创建简历</Button>
                </div>

            </div>;
        } else {
            let tip = "";
            let progress = null;
            if (localStorage.getItem("myResumeState") == "accept") {
                tip = "审核通过";
                progress = <ProgressBar now={100} />;
            }
            else if (localStorage.getItem("myResumeState") == "refuse") {
                tip = "审核未通过";
                progress = <ProgressBar now={0} />;
            }
            else if (localStorage.getItem("myResumeState") == "wait") {
                tip = "审核中";
                progress = <ProgressBar now={50} />;
            }
            
            const Args = JSON.parse(localStorage.getItem("myResumeData"));
            console.log(Args);
            const nameHash = Args.name;
            //const address = Args[0];
            const data = Args.resume;
            return <div style={{
                display: "flex", flexDirection: "column"
            }}>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>条目</th>
                            <th>内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>姓名</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>姓名哈希</td>
                            <td>{nameHash}</td>
                        </tr>
                        <tr>
                            <td>地址</td>
                            <td>qdw</td>
                        </tr>
                        <tr>
                            <td>年龄</td>
                            <td>{data.age}</td>
                        </tr>
                        <tr>
                            <td>学历</td>
                            <td >{data.education}</td>
                        </tr>
                        <tr>
                            <td>论文数量</td>
                            <td >{data.paper}</td>
                        </tr>
                        <tr>
                            <td>专利数量</td>
                            <td >{data.patent}</td>
                        </tr>
                    </tbody>
                </Table>
                {progress}
                <div className="row" style={{ justifyContent: "center", marginTop: "15px", fontSize: "30px" }}>{tip}</div>
                <Button bsStyle="info" onClick={this.nextResume.bind(this)}>申请下一份简历</Button>
            </div>;
        }

    }
}