import React from "react";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import {Avatar} from "../../Styled/image";
import styled from "styled-components";

const FriendWrapper = styled.div`
  margin: 10px 5px;
  font-size: 14px;
  cursor: pointer;
`;

const Friend = ({name}) => {
    return (
        <FriendWrapper>
            <Avatar src={defaultAvatar} width="60px"/>
            <p>
                {name}
            </p>
        </FriendWrapper>
    );
};

export default Friend;