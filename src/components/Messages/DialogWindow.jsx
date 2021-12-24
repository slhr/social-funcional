import Message from "./Message";
import {Icon} from "../Styled/image";
import smileIcon from "../../assets/images/smile.png";
import cameraIcon from "../../assets/images/camera.png";
import attachmentIcon from "../../assets/images/attachment.png";
import React from "react";
import defaultAvatar from "../../assets/images/default-avatar.png";
import styled from "styled-components";

const messages = [

    {
        id: 2,
        avatarSrc: defaultAvatar,
        isInput: true,
        text: "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello"
    },
    {
        id: 3,
        avatarSrc: defaultAvatar,
        text: "hello hello hello hello hello hello hello hello hello hello hello hello  hello hello hello hello hello hello hello hello hello hello hello hello "
    },
    {
        id: 4,
        avatarSrc: defaultAvatar,
        isInput: true,
        text: "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello "
    },
    {id: 5, avatarSrc: defaultAvatar, text: "hello"},
    {id: 6, avatarSrc: defaultAvatar, isInput: true, text: "hello hello hello"},
    {id: 7, avatarSrc: defaultAvatar, text: "hello"},
    {id: 8, avatarSrc: defaultAvatar, isInput: true, text: "hello"},
    {id: 9, avatarSrc: defaultAvatar, text: "hello"},
    {id: 10, avatarSrc: defaultAvatar, isInput: true, text: "hello"},
    {id: 11, avatarSrc: defaultAvatar, text: "hello"},
    {id: 12, avatarSrc: defaultAvatar, isInput: true, text: "hello"},
    {id: 13, avatarSrc: defaultAvatar, text: "hello"},
    {id: 14, avatarSrc: defaultAvatar, isInput: true, text: "hello"},
    {id: 15, avatarSrc: defaultAvatar, text: "..dsad"},
    {id: 16, avatarSrc: defaultAvatar, isInput: true, text: "/"},
];

const DialogWindowContainer = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
`;

const MessageBlock = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;

`;

const EnterMessageBlock = styled.div`
  background-color: #F3F5F7;
  padding: 25px 20px 15px;
`;

const InputBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageInput = styled.input`
  width: 80%;
  padding: 0 10px;
  border: 1px solid #ccc;
  color: #212529;
  font-size: 14px;

  :focus {
    outline: none;
  }

`;

const MessageSendButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #E44D3A;
  color: #fff;
  border: 2px solid #dd3e2b;

  :hover {
    cursor: pointer;
  }

  :active {
    background-color: #fff;
    color: #dd3e2b;
  }
`;

const IconBlock = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  padding: 15px 0 0;

  img:hover {
    cursor: pointer;
  }
`;

const DialogWindow = () => {
    return (
        <DialogWindowContainer>
            <MessageBlock>
                {
                    messages.map(message => {
                        return <Message key={message.id}
                                        avatarSrc={message.avatarSrc}
                                        text={message.text}
                                        isInput={message.isInput}/>
                    })
                }

            </MessageBlock>

            <EnterMessageBlock>
                <form action="">
                    <InputBlock>
                        <MessageInput type="text" placeholder="Type a message here"/>
                        <MessageSendButton>Send</MessageSendButton>
                    </InputBlock>
                </form>
                <IconBlock>
                    <Icon src={smileIcon}/>
                    <Icon src={cameraIcon}/>
                    <Icon src={attachmentIcon}/>
                </IconBlock>
            </EnterMessageBlock>

        </DialogWindowContainer>

    );
}

export default DialogWindow;