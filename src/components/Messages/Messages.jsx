import React from "react";
import styled from "styled-components";
import {Container} from "../Styled/containers";
import defaultAvatar from "../../assets/images/default-avatar.png";
import {Avatar} from "../Styled/image";
import Dialogs, {Name} from "./Dialogs";
import DialogWindow from "./DialogWindow";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const DialogsContainer = styled(Container)`
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

const StatusHeader = styled(Header)`
  border-left: 1px solid #ccc;
`;

const StatusBlock = styled.div`
  width: 100%;
  margin: 4px;
  padding-left: 15px;
`;


const OnlineStatus = styled.p`
  font-size: 16px;
  color: #686868;
`;

const Messages = () => {

    const userId = useSelector(state => state.auth.userId);
    if (!userId) return <Navigate to={"/login"}/>;
    return (
        <DialogsContainer>
            <Header>Messages</Header>
            <StatusHeader>
                <Avatar width="50px" src={defaultAvatar} alt="avatar"/>
                <StatusBlock>
                    <Name>John Doe</Name>
                    <OnlineStatus>Online</OnlineStatus>
                </StatusBlock>
            </StatusHeader>
            <Dialogs/>
            <DialogWindow/>

        </DialogsContainer>
    );
};


export default Messages;