import Message from "./Message";
import {Icon} from "../Styled/image";
import smileIcon from "../../assets/images/smile.png";
import cameraIcon from "../../assets/images/camera.png";
import attachmentIcon from "../../assets/images/attachment.png";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addMessageCreator} from "../../redux/messenger-reducer";
import {Formik, Field, Form} from "formik";

const DialogWindowContainer = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
`;

const MessageBlock = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

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
    const messages = useSelector(state => state.messenger.messages);
    const dispatch = useDispatch();


    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({block: "start", behavior: "smooth"})
    }


    const handleOnSubmit = (values, {resetForm}) => {
        if (values.messageText) {
            dispatch(addMessageCreator(values.messageText));
            resetForm()
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])


    return (
        <DialogWindowContainer>
            <MessageBlock>
                {
                    messages.map(message => {

                        return <Message key={message.id}
                                        text={message.text}
                                        isInput={message.isInput}

                        />
                    })
                }
                <div style={{float: "left"}} ref={messagesEndRef}/>
            </MessageBlock>
            <EnterMessageBlock>

                <Formik initialValues={{messageText: ""}}
                        onSubmit={handleOnSubmit}>
                    <Form autoComplete="off">

                        <InputBlock>
                            <Field as={MessageInput}
                                   id="messageText"
                                   name="messageText"
                                   type="text"
                                   placeholder="Type a message here"/>
                            <MessageSendButton type="submit">Send</MessageSendButton>
                        </InputBlock>
                    </Form>
                </Formik>
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