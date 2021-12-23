import React from "react";
import {useSelector} from "react-redux";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png"
import styled from "styled-components";
import {Container} from "../../Styled/containers";


const PostContainer = styled(Container)`
  padding: 15px 25px;
  margin-bottom: 25px;
`;

const PostHeaderBlock = styled.div`
  display: flex;
  align-items: center;
`;

const PostTextBlock = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #ccc;
`;

const FooterBlock = styled.div`
    padding: 15px 0 0 0;
`;

const Post = (props) => {

    let avatarPath = useSelector(state => state.profile?.profile?.photos?.large || defaultAvatar);

    return (
        <PostContainer>
            <PostHeaderBlock>
                <Avatar src={avatarPath} alt="avatar" width="75px"/>
                <div>
                    <div>
                        John Doe
                    </div>
                    <div>
                        3 days ago
                    </div>
                </div>
            </PostHeaderBlock>

            <PostTextBlock>
                <p>{props.message}</p>
            </PostTextBlock>


            <FooterBlock>

                <span>likes:</span>
                <span>{props.likesCount}</span>

                <span>Comment</span>
                <span>{props.likesCount}</span>

                <span>Views</span>
                <span>{props.likesCount}</span>

            </FooterBlock>
        </PostContainer>
    );
}

export default Post;