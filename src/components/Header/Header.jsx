import React, {useState} from "react";
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import arrowIcon from "../../assets/images/arrow-bottom.png";
import settingsIcon from "../../assets/images/settings.png";
import logoutIcon from "../../assets/images/logout.png";
import {Icon, Logo50} from "../Styled/image";
import {HeaderPanel, MenuBlock, StyledButton, StyledLI, StyledList} from "./Styled";

const Header = ({isAuth, email, logout}) => {
    return (
        <HeaderPanel>
            <Logo50 src={logo} alt="logo"/>
            <div>
                {
                    isAuth
                        ? <Menu email={email} logout={logout}/>
                        : <StyledButton>
                            <NavLink to="/login">Login</NavLink>
                        </StyledButton>
                }
            </div>
        </HeaderPanel>
    );
};


const Menu = ({email, logout}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const quit = () => {
        logout();
        closeMenu();
    }
    return (
        <MenuBlock>
            <StyledButton onClick={isOpen ? closeMenu : openMenu}>
                {email}
                <Icon src={arrowIcon} alt="arrow-bottom"/>
            </StyledButton>
            {
                isOpen
                    ? <StyledList>

                        <StyledLI onClick={closeMenu}>
                            <Icon src={settingsIcon} alt="settings-icon"/>
                            <NavLink to="/settings">
                                Settings
                            </NavLink>
                        </StyledLI>

                        <StyledLI onClick={quit}>
                            <Icon src={logoutIcon} alt="logout-icon"/>
                            Logout
                        </StyledLI>

                    </StyledList>

                    : null
            }
        </MenuBlock>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
});

export default connect(mapStateToProps, {logout})(Header);