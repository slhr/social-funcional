import styled from "styled-components";
import {useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import Message from "./Message";

const MessagesBlock = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

`;


const Messages = () => {
    const messages = useSelector(state => state.messenger.messages);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <MessagesBlock>
            {
                messages.map(message => {

                    return <Message key={message.id}
                                    text={message.text}
                                    isInput={message.isInput}
                    />;
                })
            }
            <div style={{float: "left"}} ref={messagesEndRef}/>
        </MessagesBlock>
    );
};

export default Messages;