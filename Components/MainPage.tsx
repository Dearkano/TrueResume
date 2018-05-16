import { Tabs,Tab,Table } from 'react-bootstrap';
import * as React from "react";
export class MainPage extends React.Component<{}, { key }> {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        return <div className="mainpage-body">
            <img src="./static/nebulas.png" className="logo" />
            <div style={{ marginTop: "-20px" }}>
                <img src="/static/blockchain.jpg" width="1515px" />
                <h1 className="title">基于星云链的简历验证系统</h1>
                <h2 className="title1">致力于在去中心化的环境下为企业提供一个安全可信的简历验证解决方案
</h2>
            </div>
            <div style={{ width: "900px", marginTop:"230px" }}>
            <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
            >
                <Tab eventKey={1} title="简历样例1">
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
                                <td>比尔·盖茨</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>63</td>
                            </tr>
                            <tr>
                                <td>学历</td>
                                <td >哈佛大学肄业</td>
                            </tr>
                            <tr>
                                <td>论文数量</td>
                                <td >1</td>
                            </tr>
                            <tr>
                                <td>专利数量</td>
                                <td >3000/年</td>
                            </tr>
                        </tbody>
                    </Table>
        </Tab>
                <Tab eventKey={2} title="简历样例2">
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
                                <td>御坂美琴</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>学历</td>
                                <td >常盘台中学</td>
                            </tr>
                            <tr>
                                <td>论文数量</td>
                                <td >0</td>
                            </tr>
                            <tr>
                                <td>专利数量</td>
                                <td >1（超电磁炮）</td>
                            </tr>
                        </tbody>
                    </Table>
        </Tab>
                <Tab eventKey={3} title="简历样例3" >
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
                                <td>吴朝晖</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>52</td>
                            </tr>
                            <tr>
                                <td>学历</td>
                                <td >浙江大学博士</td>
                            </tr>
                            <tr>
                                <td>论文数量</td>
                                <td >180</td>
                            </tr>
                            <tr>
                                <td>专利数量</td>
                                <td >120</td>
                            </tr>
                        </tbody>
                    </Table>
        </Tab>
                </Tabs>
                </div>
        </div>;
    }
}