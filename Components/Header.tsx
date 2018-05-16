import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import * as React from "react";
export class Header extends React.Component {
    render() {
        var isLogin = false;
        var name = "";
        if (localStorage.getItem("HCAccount")) {
            isLogin = true;
            name = localStorage.getItem("HCAccount");
        }
        let userCenter = null;
        if (localStorage.getItem("HCAccount") && localStorage.getItem("AccountSecret") != "") {
            userCenter = <NavItem eventKey={1} href="/usercenter">
                个人中心
      </NavItem>;
        }
        return <div><Navbar inverse collapseOnSelect>
          
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">简历验证平台</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/myresume">
                        我的简历
      </NavItem>
                    <NavItem eventKey={2} href="/verify">
                        验证简历
      </NavItem>
                  
                </Nav>
              
                <Nav pullRight>
                    {userCenter}
                    <NavItem eventKey={2} href={isLogin?"/logout":"/login"}>
                        {isLogin?name+"/注销":"登录"}
      </NavItem>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar></div>;
    }
}

