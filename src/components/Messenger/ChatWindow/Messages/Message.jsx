import {Avatar} from "../../../Styled/image";
import defaultAvatar from "../../../../assets/images/default-avatar.png";
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  float: ${props => props.isInput ? "left" : "right"};
  font-size: 14px;
  clear: both;

  span {
    margin: 5px 15px;
    padding: 15px;
    display: inline-block;
    background: ${props => props.isInput ? "#EFEFEF" : "#E44D3A"};
    color: ${props => props.isInput ? "#686868" : "#fff"};
    max-width: 350px;
    border-radius: 10px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const Message = ({isInput, text}) => {
    return (
        <Wrapper isInput={isInput}>
            {
                isInput
                    ? <div>
                        <Avatar src={defaultAvatar}/>
                        <span>{text}</span>
                    </div>
                    : <div>
                        <span>{text}</span>
                        <Avatar src={defaultAvatar}/>
                    </div>
            }
        </Wrapper>
    );
};

export default Message;