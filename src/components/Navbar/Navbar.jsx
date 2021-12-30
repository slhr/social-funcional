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


const Wrapper = styled.nav`
  grid-area: n;
  background-color: #fff;
  box-shadow: 1px 1px 5px #ccc;
`;

const LinkBlock = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;

  a:hover {
    color: #dd3e2b;
  }
`;

const Navbar = () => {

    const classes = ({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link);

    return (
        <div>
            <Wrapper>

                <LinkBlock>
                    <Icon src={profileIcon} alt="profile-icon"/>
                    <NavLink to="/profile" className={classes}>Profile</NavLink>
                </LinkBlock>

                <LinkBlock>
                    <Icon src={messagesIcon} alt="messages-icon"/>
                    <NavLink to="/dialogs" className={classes}>Messages</NavLink>
                </LinkBlock>

                <LinkBlock>
                    <Icon src={usersIcon} alt="users-icon"/>
                    <NavLink to="/users" className={classes}>Users</NavLink>
                </LinkBlock>

                <LinkBlock>
                    <Icon src={newsIcon} alt="news-icon"/>
                    <NavLink to="/news" className={classes}>News</NavLink>
                </LinkBlock>

                <LinkBlock>
                    <Icon src={musicIcon} alt="music-icon"/>
                    <NavLink to="/music" className={classes}>Music</NavLink>
                </LinkBlock>

                <LinkBlock>
                    <Icon src={settingsIcon} alt="settings-icon"/>
                    <NavLink to="/settings" className={classes}>Settings</NavLink>
                </LinkBlock>

            </Wrapper>
        </div>
    );
};

export default Navbar;