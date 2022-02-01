import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import arrowIcon from "../../assets/images/arrow-bottom.png";
import logoutIcon from "../../assets/images/logout.png";
import {logout} from "../../redux/auth-reducer";
import {Icon} from "../Styled/image";


export const MenuBlock = styled.ul`
  position: relative;
  z-index: 5;
`;


export const MenuButton = styled.button`
  height: 60px;
  width: 150px;
  background-color: transparent;
  border: 1px solid #dd3e2b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  a {
    text-decoration: none;
    display: block;
    width: 100%;
    line-height: 60px;
    color: #fff;
    font-weight: bold;
  }
`;


export const StyledList = styled.div`
  width: 150px;
  background-color: #fff;
  list-style-type: none;
  position: absolute;
  box-shadow: 1px 1px 5px #ccc;
`;


export const StyledLI = styled.li`
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
`;


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const email = useSelector(state => state.auth.email);
    const dispatch = useDispatch();

    const showMenu = () => {
        setIsOpen(true);
    };

    const hideMenu = () => {
        setIsOpen(false);
    };

    const quit = () => {
        dispatch(logout());
    };


    return (
        <MenuBlock>
            <MenuButton onClick={isOpen ? hideMenu : showMenu}>
                {email}
                <Icon src={arrowIcon} alt="arrow-bottom"/>
            </MenuButton>
            {
                isOpen &&
                <StyledList>

                    {/*<StyledLI onClick={hideMenu}>*/}
                    {/*    <Icon src={settingsIcon} alt="settings-icon"/>*/}
                    {/*    <NavLink to="/settings">*/}
                    {/*        Settings*/}
                    {/*    </NavLink>*/}
                    {/*</StyledLI>*/}

                    <StyledLI onClick={quit}>
                        <Icon src={logoutIcon} alt="logout-icon"/>
                        Logout
                    </StyledLI>

                </StyledList>

            }
        </MenuBlock>
    );
};

export default Menu;