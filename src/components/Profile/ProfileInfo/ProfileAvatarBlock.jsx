import {useDispatch} from "react-redux";
import {setAvatarPhoto} from "../../../redux/profile-reducer";
import {Container} from "../../Styled/containers";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  margin-right: 25px;
`;


const Rectangle = styled.div`
  width: 275px;
  height: 125px;
  background-color: #dd3e2b;
  position: absolute;
`;


const AvatarBlockInfo = styled.div`
  position: relative;
  padding: 10px 10px;
  text-align: center;
`;


const AvatarInput = styled.input`
  display: none;
`;


const AvatarInputLabel = styled.label`
  margin: 20px 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;

  :hover {
    background-color: #000;
    opacity: 70%;
    color: #fff;
    cursor: pointer;
  }
`;


export const Button = styled.button`
  padding: 5px;
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


const ProfileAvatarBlock = ({profile, isOwner, toggleEditMode}) => {
    const dispatch = useDispatch();

    const changeAvatar = (e) => {
        if (e.target.files.length) {
            dispatch(setAvatarPhoto(e.target.files[0]));
        }
    };

    return (
        <Wrapper>
            <Container>
                <Rectangle/>
                <AvatarBlockInfo>
                    <Avatar bordered width="220px"
                            src={profile.photos.large || defaultAvatar}
                            alt=""/>
                    {
                        isOwner &&
                        <>
                            <AvatarInput type="file" id="avatarUpload" onChange={changeAvatar}/>
                            <AvatarInputLabel htmlFor="avatarUpload">Upload avatar</AvatarInputLabel>
                        </>
                    }
                </AvatarBlockInfo>
            </Container>

            <Container>
                <AvatarBlockInfo>
                    <div>Friends</div>
                    <div>55</div>
                </AvatarBlockInfo>
            </Container>

            <Container>
                <AvatarBlockInfo>
                    <div>Subscriptions</div>
                    <div>42</div>
                </AvatarBlockInfo>
            </Container>

            {isOwner &&
                <Container>
                    <AvatarBlockInfo>
                        <div>
                            <Button onClick={toggleEditMode}>Edit profile</Button>
                        </div>
                    </AvatarBlockInfo>
                </Container>
            }
        </Wrapper>
    );
};

export default ProfileAvatarBlock;