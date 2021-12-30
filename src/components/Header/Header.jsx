import React from "react";
import logo from "../../assets/images/logo.png";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {Logo} from "../Styled/image";
import Menu, {MenuButton} from "./Menu";
import styled from "styled-components";


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
