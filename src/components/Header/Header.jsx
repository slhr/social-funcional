import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import {Logo} from "../Styled/image";
import Menu, {MenuButton} from "./Menu";


export const Wrapper = styled.div`
  grid-area: h;
  background-color: #e44d3a;
  padding: 0 0 0 10px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <Wrapper>
            <Logo src={logo} alt="logo"/>
            <div>
                {
                    isAuth
                        ? <Menu/>
                        : <MenuButton>
                            <NavLink to="/login">Login</NavLink>
                        </MenuButton>
                }
            </div>
        </Wrapper>
    );
};

export default Header;
