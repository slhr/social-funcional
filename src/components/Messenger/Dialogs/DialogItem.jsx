import styled from "styled-components";
import {Avatar} from "../../Styled/image";
import React from "react";


const DialogItemWrapper = styled.li`
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


const DialogItemTextBlock = styled.div`
  width: 100%;
  margin: 4px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
`;


export const Name = styled.h3`
  font-size: 18px;
  font-weight: normal;
`;


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


const DialogItem = ({dialog}) => {
    return (
        <DialogItemWrapper active={dialog.id === 1}>
            <Avatar width="50px" src={dialog.avatar} alt="avatar"/>
            <DialogItemTextBlock>
                <div>
                    <Name>{dialog.fullName}</Name>
                    <DialogLastMessage>{dialog.lastMessage}</DialogLastMessage>
                </div>

                <DialogLastMessageTime>{dialog.lastMessageSendTime}</DialogLastMessageTime>

            </DialogItemTextBlock>
        </DialogItemWrapper>
    );
};


export default DialogItem;