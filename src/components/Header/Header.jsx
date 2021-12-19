import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"

const HeaderPanel = styled.div`
  grid-area: h;
  background-color: #e44d3a;
  padding: 5px 10px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 50px;
`


const Header = () => {
    return (
        <HeaderPanel>
            <Logo src={logo} alt="logo"/>
            <div> login logout</div>
        </HeaderPanel>

    );
};

export default Header;