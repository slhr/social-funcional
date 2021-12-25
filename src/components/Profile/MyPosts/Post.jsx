import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Icon} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png"
import styled from "styled-components";
import {Container, IconBlock} from "../../Styled/containers";
import menuIcon from "../../../assets/images/menu.png";
import likeDisabledIcon from "../../../assets/images/likeDisabled.png";
import likeEnabledIcon from "../../../assets/images/likeEnabled.png";
import eyeIcon from "../../../assets/images/eye.png";
import {addPostCreator} from "../../../redux/profile-reducer";
import {Formik, Form, Field} from "formik";
import smileIcon from "../../../assets/images/smile.png";
import cameraIcon from "../../../assets/images/camera.png";
import attachmentIcon from "../../../assets/images/attachment.png";


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

const Post = ({isAuthorized, message, likesCount, viewsCount, elapsedTimePost}) => {
    const avatarPath = useSelector(state => state.profile?.profile?.photos?.large || defaultAvatar);
    const fullName = useSelector(state => state.profile?.profile?.fullName);

    const [likesNumber, setLikesNumber] = useState(likesCount);
    const [isLiked, setIsLiked] = useState(false)

    const likeToggle = () => {
        if (isAuthorized && !isLiked) {
            setLikesNumber(likesNumber + 1);
            setIsLiked(true);
        } else if (isAuthorized && isLiked) {
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
                    <ElapsedTimePost>{elapsedTimePost}</ElapsedTimePost>

                </PostHeaderText>
                <Icon src={menuIcon} margins="none" pointer/>
            </PostHeaderBlock>

            <PostTextBlock>
                <p>{message}</p>
            </PostTextBlock>


            <FooterBlock>
                <FooterIconBlock>
                    <Icon src={isLiked ? likeEnabledIcon : likeDisabledIcon} margins="0 10px 0 0" pointer
                          onClick={likeToggle}/>
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

const PostInput = styled.textarea`
  resize: none;
  margin: 0 0 0 15px;
  width: 100%;


  padding: 10px 10px;
  border: 1px solid #ccc;
  color: #212529;
  font-size: 14px;


  :focus {
    outline: none;
  }
`;

const PostSendButton = styled.button`
  margin: 15px 0 0 0;
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

const Div = styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 65px;
  text-align: right;
`

export const PostCreateForm = ({toggleEditMode}) => {
    const avatarPath = useSelector(state => state.profile?.profile?.photos?.large || defaultAvatar);

    const dispatch = useDispatch();

    const handleOnSubmit = (values) => {
        dispatch(addPostCreator(values.postText));
        toggleEditMode()
    };

    return (
        <PostContainer>
            <Formik initialValues={{postText: ""}}
                    onSubmit={handleOnSubmit}>
                <Form autoComplete="off">
                    <PostHeaderBlock>
                        <Avatar src={avatarPath} alt="avatar" width="50px"/>


                        <Field as={PostInput} name="postText" id="postText" type="text"
                               placeholder="Type a post message here"/>

                    </PostHeaderBlock>

                    <Div>
                        <IconBlock>
                            <Icon src={smileIcon}/>
                            <Icon src={cameraIcon}/>
                            <Icon src={attachmentIcon}/>
                        </IconBlock>
                        <PostSendButton type="submit">
                            Add Post
                        </PostSendButton>
                    </Div>

                </Form>
            </Formik>

        </PostContainer>
    )
}

export default Post;