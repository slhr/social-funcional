import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Avatar, Icon} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png"
import styled from "styled-components";
import {Container} from "../../Styled/containers";
import menuIcon from "../../../assets/images/menu.png";
import likeDisabledIcon from "../../../assets/images/likeDisabled.png";
import likeEnabledIcon from "../../../assets/images/likeEnabled.png";
import eyeIcon from "../../../assets/images/eye.png";


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
  color: #666666
`;

const FooterBlock = styled.div`
  padding: 15px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterIconBlock = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostHeaderText = styled.div`
  width: 100%;
  margin: 4px;
  padding-left: 15px;
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: normal;
`;

const ElapsedTimePost = styled.p`
  font-size: 16px;
  color: #686868;
  width: 120px;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  word-wrap: anywhere;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FooterText = styled.span`
  font-size: 14px;
color: #B2B2B2;
`;

const Post = ({message, likesCount, viewsCount}) => {
    const avatarPath = useSelector(state => state.profile?.profile?.photos?.large || defaultAvatar);
    const fullName = useSelector(state => state.profile?.profile?.fullName);

    const [likesNumber, setLikesNumber] = useState(likesCount);
    const [isLiked, setIsLiked] = useState(false)

    const likeToggle = () => {
        if (!isLiked) {
            setLikesNumber(likesNumber + 1);
            setIsLiked(true);
        } else {
            setLikesNumber(likesNumber - 1);
            setIsLiked(false);
        }
    }

    return (
        <PostContainer>
            <PostHeaderBlock>
                <Avatar src={avatarPath} alt="avatar" width="75px"/>
                <PostHeaderText>

                    <Name>{fullName}</Name>
                    <ElapsedTimePost>3 days ago</ElapsedTimePost>

                </PostHeaderText>
                <Icon src={menuIcon} margins="none" pointer/>
            </PostHeaderBlock>

            <PostTextBlock>
                <p>{message}</p>
            </PostTextBlock>


            <FooterBlock>
                <FooterIconBlock>
                    <Icon src={isLiked ? likeEnabledIcon : likeDisabledIcon} margins="0 10px 0 0" pointer onClick={likeToggle}/>
                    <FooterText>
                        {likesNumber}
                    </FooterText>
                </FooterIconBlock>

                <FooterIconBlock>
                    <Icon src={eyeIcon} margins="0 10px 0 15px"/>
                    <FooterText>
                        Views: {viewsCount}
                    </FooterText>
                </FooterIconBlock>

            </FooterBlock>
        </PostContainer>
    );
}

export default Post;