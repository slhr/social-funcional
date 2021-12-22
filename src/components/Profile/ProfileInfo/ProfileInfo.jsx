import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import ProfileStatus from "./Status";
import {Container, FlexContainer} from "../../Styled/containers";
import styled from "styled-components";

const InfoBlock = styled.div`
  width: 50%;
  background-color: #fff;
  padding-left: 100px;

  div {
    padding: 5px;
  }

  .fullName {
    font-size: 32px;
    font-weight: bold;
  }

  .status {
    font-size: 22px;
    word-wrap: normal;
  }
`

const AvatarBlock = styled.div`
  background-color: #fff;
`

const Rectangle = styled.div`
  width: 975px;
  height: 125px;
  background-color: #dd3e2b;
  position: absolute;
`

const AvatarDiv = styled.div`
  position: relative;
  padding: 10px 100px;  
`

const ProfileInfo = ({profile, status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    if (!profile) return <Preloader/>
    return (<FlexContainer>
        <Container>
            <AvatarBlock>
                <Rectangle/>
                <AvatarDiv>
                    <Avatar width="200px" src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
                    <button onClick={toggleEditMode}>Edit info</button>
                </AvatarDiv>

            </AvatarBlock>


            {editMode
                ?
                <FlexContainer>
                    <InfoBlock>

                        <div className="fullName">{profile.fullName}</div>
                        <div className="status">Status: {status}</div>
                        <div className="aboutMe">AboutMe:<input type="text"/></div>

                        <div className="lookingForAJob">Looking for a job <input type="checkbox"/></div>
                        <div className="lookingForAJobDescription">Skills: <input type="text"/></div>
                    </InfoBlock>

                    <InfoBlock>
                        <div className="contacts">Contacts:</div>
                        {
                            Object.keys(profile.contacts).map(key => {
                                return <div key={key}>{key}: <input type="text"/></div>

                            })
                        }

                        <button onClick={deactivateEditMode}>Save</button>

                    </InfoBlock>

                </FlexContainer>
                :
                <FlexContainer>
                    <InfoBlock>
                        <div className="fullName">{profile.fullName}</div>
                        <div className="status">Status: <ProfileStatus status={status} updateStatus={updateStatus}/>
                        </div>
                        <div className="aboutMe">AboutMe: {profile.aboutMe}</div>
                        <div className="lookingForAJob">Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
                        <div className="lookingForAJobDescription">Skills: {profile.lookingForAJobDescription}</div>
                    </InfoBlock>

                    <InfoBlock>
                        <div className="contacts">Contacts:</div>
                        {
                            Object.keys(profile.contacts).map(key => {
                                if (profile.contacts[key]) {
                                    return <div key={key} className="contact">{key}: {profile.contacts[key]}</div>
                                }
                                return null;
                            })
                        }



                    </InfoBlock>

                </FlexContainer>


            }

        </Container>

    </FlexContainer>);
}

export default ProfileInfo;