import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import { Table, Button } from 'react-bootstrap';
import * as Utility from '../Utility';
import * as Nebulas from "../Nebulas"
import * as md5 from 'md5';
export class Veryify extends React.Component<{}, {resume,resumes,done,resume1hash,resume1Rhash,resume2hash,resume2Rhash,tip1,tip2,verificationResult,name,v1hash,v2hash,tip3}> {
    constructor(props) {
        super(props);
        this.state = { resume: { name: "", age: "", education: "", paper: "", patent: "" },resumes: null, done: false, resume1hash: "", resume1Rhash: "", resume2hash: "", resume2Rhash: "", tip1: "", tip2: "", verificationResult:"",name:"",v1hash:"",v2hash:"",tip3:"" }
    }
    async getResume() {
        const reponse = await fetch("/static/resume.json");
        const data = await reponse.json();
        this.setState({ resumes: data,done:true });
    }
    async veryify1() {
        const jstr = JSON.stringify(this.state.resumes[0]);
        console.log("jstr=" + jstr);
        const hash = md5(jstr);
        const curUser = localStorage.getItem("HCAccount");
        //const nameHash = md5(this.state.resumes[0].name);
        const nameHash = md5(this.state.resumes[0].name);
        /*const data = await Hyperchain.InvokeContract([curUser, name], "query");
        const Ret = data.Ret;
        var r = Ret.substring(2);
        const buf = new Buffer(r, 'hex');
        const s = buf.toString();
        const bchash1 = Utility.trim(s);
        */
        const resume = await Nebulas.queryResume(nameHash);
        console.log(resume);
        let tip = "验证失败！";
        const result = JSON.parse(resume.result.result);
        const resumeHash = result.resumeHash;
        if (resumeHash == hash) tip = "验证成功！";
        this.setState({ resume1hash: hash, resume1Rhash: resumeHash, tip1: tip });
    }
    async veryify2() {
        const jstr = JSON.stringify(this.state.resumes[1]);
        const hash = md5(jstr);
        const curUser = localStorage.getItem("HCAccount");
        const nameHash = md5(this.state.resumes[1].name);
        console.log("jstr = " + jstr);
        console.log("verify hash= " + hash);
        /*const data = await Hyperchain.InvokeContract([curUser, name], "query");
        const Ret = data.Ret;
        var r = Ret.substring(2);
        const buf = new Buffer(r, 'hex');
        const s = buf.toString();
        const bchash1 = Utility.trim(s);
        */
        const resume = await Nebulas.queryResume(nameHash);
        let tip = "验证失败！";
        const result = JSON.parse(resume.result.result);
        const resumeHash = result.resumeHash;
        if (resumeHash == hash) { tip = "验证成功！"; console.log("==");}
        this.setState({ resume2hash: hash, resume2Rhash: resumeHash,tip2:tip});
    }
    async verify() {
        const resume = await Nebulas.queryResume(md5(this.state.name));
        const result = JSON.parse(resume.result.result);
        const resumeHash = result.resumeHash;
        this.setState({ verificationResult: resumeHash });
    }
    handleENameChange(e) {
        this.setState({ name: e.target.value });
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
    async verifyResume() {
        const jstr = JSON.stringify(this.state.resume);
        const hash = md5(jstr);
        const curUser = localStorage.getItem("HCAccount");
        const nameHash = md5(this.state.resume.name);
        const resume = await Nebulas.queryResume(nameHash);
        let tip = "验证失败！";
        const result = JSON.parse(resume.result.result);
        const resumeHash = result.resumeHash;
        if (resumeHash == hash) { tip = "验证成功！"; console.log("=="); }
        this.setState({ v1hash: hash, v2hash: resumeHash, tip3: tip });
    }
    render() {
        let res = null;
        if (this.state.done) {
            res = <div style={{ display: 'flex', justifyContent: "space-around", width: "100%", marginTop:"50px" }}>
                <div className="column" style={{ width: "500px" }}>
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
                            <td>{this.state.resumes[0].name}</td>
                        </tr>
                        <tr>
                            <td>年龄</td>
                            <td>{this.state.resumes[0].age}</td>
                        </tr>
                        <tr>
                            <td>学历</td>
                            <td >{this.state.resumes[0].education}</td>
                        </tr>
                        <tr>
                            <td>论文数量</td>
                            <td >{this.state.resumes[0].paper}</td>
                        </tr>
                        <tr>
                            <td>专利数量</td>
                            <td >{this.state.resumes[0].patent}</td>
                        </tr>
                        <tr>
                                <td>提交hash</td>
                            <td >{this.state.resume1hash}</td>
                       </tr>
                        <tr>
                            <td>区块链hash</td>
                            <td >{this.state.resume1Rhash}</td>
                        </tr>
                    </tbody>
                    </Table>
                    <Button bsStyle="success" onClick={this.veryify1.bind(this)}>验证</Button>
                    <h3>{this.state.tip1}</h3>
                </div>

                <div className="column" style={{width:"500px"}}>
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
                            <td>{this.state.resumes[1].name}</td>
                        </tr>
                        <tr>
                            <td>年龄</td>
                            <td>{this.state.resumes[1].age}</td>
                        </tr>
                        <tr>
                            <td>学历</td>
                            <td >{this.state.resumes[1].education}</td>
                        </tr>
                        <tr>
                            <td>论文数量</td>
                            <td >{this.state.resumes[1].paper}</td>
                        </tr>
                        <tr>
                            <td>专利数量</td>
                            <td >{this.state.resumes[1].patent}</td>
                            </tr>
                            <tr>
                                <td>提交hash</td>
                                <td >{this.state.resume2hash}</td>
                            </tr>
                            <tr>
                                <td>区块链hash</td>
                                <td>{this.state.resume2Rhash}</td>
                            </tr>
                    </tbody>
                    </Table>
                    <Button bsStyle="success" onClick={this.veryify2.bind(this)}>验证</Button>
                    <h3>{this.state.tip2}</h3>
                    </div>
            </div>;
        }
        return <div style={{
            display: "flex", flexDirection: 'column', justifyContent: "center", alignItems:"center"
        }}>
            <h1>Step 1</h1>
            <div style={{ display: "flex" }}>
                <div className="login-form">
                    <p>姓名</p><input name="username" type="text" id="loginName" onChange={this.handleENameChange.bind(this)} value={this.state.name} autoComplete="username" /><Button bsStyle="info" style={{ marginLeft:"1rem" }} onClick={this.verify.bind(this)}>查询</Button>
                </div>
            </div>
            <h1>Step 2</h1>
            <div className="column">
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

                <Button onClick={this.verifyResume.bind(this)}>验证简历</Button>
                <Table striped bordered condensed hover>
                    <tbody>
                        <tr>
                            <td>提交hash</td>
                            <td>{this.state.v1hash}</td>
                        </tr>
                        <tr>
                            <td>区块链hash</td>
                            <td>{this.state.v2hash}</td>
                        </tr>                     
                    </tbody>
                </Table>
                <h3>{this.state.tip3}</h3>
            </div>

            <div className="row">{this.state.verificationResult}</div>
            <h1>Step 3</h1>
            <Button bsStyle="info" style={{width:"400px"}}onClick={this.getResume.bind(this)}>获取简历</Button>
            {res}
        </div>;
    }
}