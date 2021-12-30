import {Avatar} from "../Styled/image";
import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";


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

`;

const DialogItem = styled.li`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  display: flex;

  background-color: ${props => props.active ? "#EFEFEF" : "transparent"};


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
    const dialogs = useSelector(state => state.messenger.dialogs);

    return (
        <DialogsList>
            {
                dialogs.map(dialog => {
                    return (
                        <DialogItem key={dialog.id} active={dialog.id === 1}>
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
};

export default Dialogs;