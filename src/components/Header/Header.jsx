import React, {useState} from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import arrowIcon from "../../assets/images/arrow-bottom.png";
import settingsIcon from "../../assets/images/settings.png";
import logoutIcon from "../../assets/images/logout.png";
import {Icon, Logo50} from "../Styled/image";

const HeaderPanel = styled.div`
  grid-area: h;
  background-color: #e44d3a;
  padding: 0 0 0 10px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`



const StyledButton = styled.button`
  height: 60px;
  width: 150px;
  background-color: transparent;
  border: 1px solid #dd3e2b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    text-decoration: none;
    display: block;
    width: 100%;
    line-height: 60px;
    color: black;
  }
`
const StyledList = styled.div`
  width: 150px;
  background-color: #fff;
  list-style-type: none;
  position: absolute;
  box-shadow: 1px 1px 5px #ccc;
`

const MenuBlock = styled.ul`
  position: relative;
`

const StyledLI = styled.li`
  padding: 10px 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    color: #dd3e2b;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  a:hover {
    color: #dd3e2b;
  }
`



const Header = ({isAuth, email, logout}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <HeaderPanel>
            <Logo50 src={logo} alt="logo"/>
            <div>
                {
                    isAuth
                        ? <MenuBlock>

                            <StyledButton onClick={isOpen ? closeMenu : openMenu}>
                                {email}
                                <Icon src={arrowIcon} alt="arrow-bottom"/>
                            </StyledButton>

                            {
                                isOpen
                                    ? <StyledList>
                                        <StyledLI onClick={closeMenu}>
                                            <Icon src={settingsIcon} alt="arrow-bottom"/>
                                            <NavLink to="/settings">
                                                Settings
                                            </NavLink>
                                        </StyledLI>
                                        <StyledLI onClick={() => {
                                            logout()
                                            closeMenu()
                                        }}>
                                            <Icon src={logoutIcon} alt="arrow-bottom"/>
                                            Logout
                                        </StyledLI>
                                    </StyledList>
                                    : null
                            }
                        </MenuBlock>
                        : <StyledButton><NavLink to="/login">Login</NavLink></StyledButton>
                }
            </div>
        </HeaderPanel>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
})

export default connect(mapStateToProps, {logout})(Header);