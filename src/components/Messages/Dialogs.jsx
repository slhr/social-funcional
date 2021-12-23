import {Avatar} from "../Styled/image";
import React from "react";
import styled from "styled-components";
import defaultAvatar from "../../assets/images/default-avatar.png";


const dialogs = [
    {id: 1, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 2, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 3, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 4, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 5, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 6, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 7, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 8, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 9, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
    {id: 10, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:55 PM"},
]



const DialogLastMessage = styled.p`
  font-size: 16px;
  color: #686868;
  width: 120px;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  word-wrap: anywhere;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DialogLastMessageTime = styled.div`
  font-size: 14px;
  color: #B2B2B2;
`;

const DialogItemTextBlock = styled.div`
  width: 100%;
  margin: 4px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;

`;

const DialogsList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

`

const DialogItem = styled.li`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  display: flex;

  :hover {
    background-color: #EFEFEF;
    cursor: pointer;
  }
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: normal;
`;

const Dialogs = () => {
    return (
        <DialogsList>
            {
                dialogs.map(dialog => {
                    return (
                        <DialogItem>
                            <Avatar width="50px" src={dialog.avatar} alt="avatar"/>
                            <DialogItemTextBlock>

                                <div>
                                    <Name>{dialog.fullName}</Name>
                                    <DialogLastMessage>{dialog.lastMessage}</DialogLastMessage>
                                </div>

                                <DialogLastMessageTime>{dialog.lastMessageSendTime}</DialogLastMessageTime>

                            </DialogItemTextBlock>
                        </DialogItem>
                    );
                })
            }
        </DialogsList>
    );
}

export default Dialogs;