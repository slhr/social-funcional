import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
import {Icon} from "../Styled/image";
import settingsIcon from "../../assets/images/settings.png";
import profileIcon from "../../assets/images/profile.png";
import usersIcon from "../../assets/images/users.png";
import messagesIcon from "../../assets/images/messages.png";
import newsIcon from "../../assets/images/news.png";
import musicIcon from "../../assets/images/music.png";


const NavbarWrapper = styled.nav`
  grid-area: n;
  background-color: #fff;
  box-shadow: 1px 1px 5px #ccc;
`

const LinkWrapper = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  a:hover {
    color: #dd3e2b;
  }
`


const Navbar = () => {

    const classNames = ({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)

    return (
        <div>
            <NavbarWrapper>
                <LinkWrapper>
                    <Icon src={profileIcon} alt="arrow-bottom"/>
                    <NavLink to="/profile" className={classNames}>Profile</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <Icon src={messagesIcon} alt="arrow-bottom"/>
                    <NavLink to="/dialogs" className={classNames}>Messages</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <Icon src={usersIcon} alt="arrow-bottom"/>
                    <NavLink to="/users" className={classNames}>Users</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <Icon src={newsIcon} alt="arrow-bottom"/>
                    <NavLink to="/news" className={classNames}>News</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <Icon src={musicIcon} alt="arrow-bottom"/>
                    <NavLink to="/music" className={classNames}>Music</NavLink>
                </LinkWrapper>

                <LinkWrapper>
                    <Icon src={settingsIcon} alt="arrow-bottom"/>
                    <NavLink to="/settings" className={classNames}>Settings</NavLink>
                </LinkWrapper>
            </NavbarWrapper>

        </div>

    );
};

export default Navbar;