import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addMessageCreator} from "../../../../redux/messenger-reducer";
import {Field, Form, Formik} from "formik";
import {IconBlock} from "../../../Styled/containers";
import {Icon} from "../../../Styled/image";
import smileIcon from "../../../../assets/images/smile.png";
import cameraIcon from "../../../../assets/images/camera.png";
import attachmentIcon from "../../../../assets/images/attachment.png";
import React from "react";


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


const MessageInputBlock = () => {
    const dispatch = useDispatch();

    const handleOnSubmit = (values, {resetForm}) => {
        if (values.messageText) {
            dispatch(addMessageCreator(values.messageText));
            resetForm();
        }
    };

    return (
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
    );
};

export default MessageInputBlock;