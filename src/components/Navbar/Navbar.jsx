import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";


const NavbarWrapper = styled.nav`
  grid-area: n;
  background-color: #fff;
  height: 230px;
  box-shadow: 1px 1px 5px #ccc;
`

const LinkWrapper = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #f2f2f2;
  
`


const Navbar = () => {

    const classNames = ({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)

    return (
        <div>
            <NavbarWrapper>
                <LinkWrapper>
                    <NavLink to="/profile" className={classNames}>Profile</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <NavLink to="/dialogs" className={classNames}>Messages</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <NavLink to="/users" className={classNames}>Users</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <NavLink to="/news" className={classNames}>News</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <NavLink to="/music" className={classNames}>Music</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <NavLink to="/settings" className={classNames}>Settings</NavLink>
                </LinkWrapper>
            </NavbarWrapper>

        </div>

    );
};

export default Navbar;