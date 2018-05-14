import * as Nebulas from '../Nebulas';
import * as React from 'react';
import * as md5 from "md5";
export class NebulasTest extends React.Component<{}, {}>{

    async test() {
        const nameHash = md5("田子珺");
        const resume = await Nebulas.queryResume(nameHash);
        console.log(resume);
    }
    async test1() {
        const nameHash = "vayne tian";
        const resume = await Nebulas.queryResume(nameHash);
        console.log(resume);
    }
    render() {
        return <div><button onClick={this.test}>test</button><button onClick={this.test1}>test1</button></div>;
    }
}