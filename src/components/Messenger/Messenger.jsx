import React from "react";
import styled from "styled-components";
import {Container} from "../Styled/containers";
import defaultAvatar from "../../assets/images/default-avatar.png";
import {Avatar} from "../Styled/image";
import Dialogs from "./Dialogs/Dialogs";
import ChatWindow from "./ChatWindow/ChatWindow";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Name} from "./Dialogs/DialogItem";


const Wrapper = styled(Container)`
  display: grid;
  grid-template-rows: 100px 700px;
  grid-template-columns: 1fr 2fr;
  border: none;
`;

const Header = styled.h3`
  padding: 0 25px;
  display: flex;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
`;

const ActiveDialogHeader = styled(Header)`
  border-left: 1px solid #ccc;
`;

const ActiveDialogUserInfo = styled.div`
  width: 100%;
  margin: 4px;
  padding-left: 15px;
`;


const OnlineStatus = styled.p`
  font-size: 16px;
  color: #686868;
`;

const Messenger = () => {
    const authorizedUserId = useSelector(state => state.auth.userId);

    if (!authorizedUserId) return <Navigate to={"/login"}/>;

    return (
        <Wrapper>
            <Header>Messages</Header>
            <ActiveDialogHeader>
                <Avatar width="50px" src={defaultAvatar} alt="avatar"/>
                <ActiveDialogUserInfo>
                    <Name>John Doe</Name>
                    <OnlineStatus>Online</OnlineStatus>
                </ActiveDialogUserInfo>
            </ActiveDialogHeader>
            <Dialogs/>
            <ChatWindow/>

        </Wrapper>
    );
};


export default Messenger;