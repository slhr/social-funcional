import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import defaultAvatar from "../../assets/images/default-avatar.png"
import {Avatar200} from "../Styled/image";
import styled from "styled-components";


const Profile = ({profile, status, authorizedUserId, getUserProfile, getStatus, updateStatus}) => {
    const params = useParams();
    const userId = params.userId || authorizedUserId;

    useEffect(() => {
        getUserProfile(userId);
        getStatus(userId);
    }, [getStatus, getUserProfile, userId]);


    return (<div>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}/>
        <MyPosts/>
    </div>);
};

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Container = styled.div`
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 5px #ccc;
  width: 100%;
`

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

const Avatar = styled.div`
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
                <Avatar>
                    <Avatar200 src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
                    <button onClick={toggleEditMode}>Edit info</button>
                </Avatar>

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

const PostsContainer = styled.div`
    margin-top: 25px;
  background-color: #fff;
`

const MyPosts = () => {
    return (<PostsContainer>
        <Container>
            My Posts
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Container>
    </PostsContainer>);
}

const ProfileStatus = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [formStatus, setStatus] = useState(status);

    useEffect( () => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        updateStatus(formStatus);
        setEditMode(false);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (

        editMode
            ? <input autoFocus={true}
                     onBlur={deactivateEditMode}
                     type="text"
                     value={formStatus}
                     onChange={onStatusChange}/>

            : <span onDoubleClick={activateEditMode}>{status}</span>


    );
};

const mapStateToProps = state => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
});

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(Profile);