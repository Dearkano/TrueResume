import * as React from "react";
import * as Hyperchain from "../Hyperchain"
import { Table, Button } from 'react-bootstrap';
import * as Utility from '../Utility';
import * as Nebulas from "../Nebulas"
import * as md5 from 'md5';
export class Veryify extends React.Component<{}, {resumes,done,resume1hash,resume1Rhash,resume2hash,resume2Rhash,tip1,tip2}> {
    constructor(props) {
        super(props);
        this.state = { resumes: null, done: false, resume1hash: "", resume1Rhash: "", resume2hash: "", resume2Rhash:"",tip1:"",tip2:"" }
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
        let resumeHash = resume.resumeHash;
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
            <Button bsStyle="info" style={{width:"400px"}}onClick={this.getResume.bind(this)}>获取简历</Button>
            {res}
        </div>;
    }
}