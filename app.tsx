import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown,Tab,Tabs } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { MainPage } from './Components/MainPage';
import { APITest } from './Components/APITest';
import { HyperChainAPITest } from './Components/HyperChainAPITest';
import {LogIn} from "./Components/LogIn";
import { LogOut } from "./Components/LogOut";
import { MyResume } from "./Components/MyResume";
import { Veryify } from "./Components/Veryify";
import { UserCenter } from "./Components/UserCenter";
import { NebulasTest } from "./Components/NebulasTest";
import { Register } from "./Components/Register";
export class App extends React.Component<{}, {}>{
    render() {
        return <Router>
            <div className="root">
                <Header />
                <Route exact path="/" component={MainPage} />
                <Route exact path="/apitest" component={HyperChainAPITest} />
                <Route exact path ="/login" component = {LogIn} />
                <Route exact path="/logout" component={LogOut} />
                <Route exact path="/myresume" component={MyResume} />
                <Route exact path="/verify" component={Veryify} />
                <Route exact path="/usercenter" component={UserCenter} />
                <Route exact path="/nebulas" component={NebulasTest} />
                <Route exact path="/register" component={Register} />
                <Footer />
            </div>
            </Router>
        ;
    }
}








ReactDOM.render(
    <App />,
    document.getElementById('root')

);