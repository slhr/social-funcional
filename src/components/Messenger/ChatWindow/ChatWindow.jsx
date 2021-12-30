import React from "react";
import styled from "styled-components";
import Messages from "./Messages/Messages";
import MessageInputBlock from "./MessageInputBlock/MessageInputBlock";


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
`;


const ChatWindow = () => {
    return (
        <Wrapper>
            <Messages/>
            <MessageInputBlock/>
        </Wrapper>
    );
};


export default ChatWindow;

