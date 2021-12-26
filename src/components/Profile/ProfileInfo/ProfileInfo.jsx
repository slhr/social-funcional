import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import ProfileStatus from "./Status";
import {Container, FlexContainer} from "../../Styled/containers";
import styled from "styled-components";
import {BlockContainer} from "../Profile";
import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {saveProfile} from "../../../redux/profile-reducer";

const InfoBlock = styled.div`
  margin: 15px;
  padding: 0 0 15px 0;
  border-bottom: ${props => props.borderBottom && "1px solid #ccc"};
  position: relative;
`;

const InfoBlockHeader = styled.div`
  position: absolute;
  height: 22px;
  background-color: #fff;
  padding: 0 10px 0 0;
  top: -25px;
  left: 0;
`;

const Name = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const OnlineStatus = styled.span`
  font-size: 16px;
  color: #939393;
`;


const InfoItem = styled.span`
  padding: 5px 0 5px 0;
  color: ${props => props.field && "#818C99"};
`;

const InputItem = styled.input`
  width: 100%;
  font-size: 16px;
  background-color: #f2f2f2;
  border: none;
  outline: none;

`


const Rectangle = styled.div`
  width: 275px;
  height: 125px;
  background-color: #dd3e2b;
  position: absolute;
`

const AvatarBlock = styled.div`
  position: relative;
  padding: 10px 10px;
  text-align: center;
`

const Wrapper = styled.div`
  margin-right: 25px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const ProfileButton = styled.button`

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

const ProfileInfo = ({profile, status, updateStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const handleOnSubmit = (values) => {
        const keys = Object.keys(values);
        keys.forEach(key => {
            if (!values[key]) values[key] = "-";
        })


        dispatch(saveProfile(values))
        toggleEditMode()
    }

    if (!profile) return <Preloader/>

    return (
        <BlockContainer>

            <Wrapper>
                <Container>
                    <Rectangle/>
                    <AvatarBlock>
                        <Avatar bordered width="220px"
                                src={profile.photos.large ? profile.photos.large : defaultAvatar}
                                alt=""/>

                    </AvatarBlock>
                </Container>

                <Container>
                    <AvatarBlock>
                        <div>Following</div>
                        <div>55</div>
                    </AvatarBlock>
                </Container>

                <Container>
                    <AvatarBlock>
                        <div>Followers</div>
                        <div>42</div>
                    </AvatarBlock>
                </Container>

                {isOwner &&
                    <Container>
                        <AvatarBlock>
                            <div>
                                <ProfileButton onClick={toggleEditMode}>Edit profile</ProfileButton>
                            </div>
                        </AvatarBlock>
                    </Container>
                }
            </Wrapper>

            <Container>
                <InfoBlock borderBottom>

                    <FlexContainer justify="space-between">
                        <Name>{profile.fullName}</Name>
                        <OnlineStatus>Online</OnlineStatus>
                    </FlexContainer>
                    {
                        isOwner
                            ? <ProfileStatus status={status} updateStatus={updateStatus}/>
                            : <span>{status}</span>
                    }
                </InfoBlock>

                <Formik initialValues={{
                    fullName: profile.fullName,
                    aboutMe: profile.aboutMe,
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    contacts: profile.contacts,
                }}
                        onSubmit={handleOnSubmit}>
                    <Form autoComplete="off">


                        <InfoBlock borderBottom>
                            <GridContainer>
                                <InfoItem field>AboutMe:</InfoItem>
                                <InfoItem>{editMode ? <Field as={InputItem} type="text" name="aboutMe"
                                                             id="aboutMe"/> : profile.aboutMe || "-"}</InfoItem>
                            </GridContainer>

                            <GridContainer>
                                <InfoItem field>Looking for a job:</InfoItem>
                                <InfoItem>{editMode ?
                                    <Field type="checkbox" name="lookingForAJob"
                                           id="lookingForAJob"/> : profile.lookingForAJob ? "yes" : "no"}</InfoItem>
                            </GridContainer>

                            <GridContainer>
                                <InfoItem field>Skills:</InfoItem>
                                <InfoItem>{editMode ?
                                    <Field as={InputItem} type="text" name="lookingForAJobDescription"
                                           id="lookingForAJobDescription"/> : profile.lookingForAJobDescription || "-"}</InfoItem>
                            </GridContainer>
                        </InfoBlock>

                        <InfoBlock>
                            <InfoBlockHeader>Contact info</InfoBlockHeader>
                            {
                                Object.keys(profile.contacts).map(key => {
                                    return (
                                        <GridContainer key={key}>
                                            <InfoItem field>{key}:</InfoItem>
                                            <InfoItem>{editMode ?
                                                <Field as={InputItem} type="text" name={`contacts.${key}`}
                                                       id={`contacts.${key}`}/> : profile.contacts[key] || "-"}</InfoItem>
                                        </GridContainer>);
                                })
                            }
                            <GridContainer>
                                <div/>
                                <InfoItem> {editMode && <ProfileButton type="submit">Save</ProfileButton>}</InfoItem>
                            </GridContainer>

                        </InfoBlock>

                    </Form>
                </Formik>
            </Container>
        </BlockContainer>
    );
}

export default ProfileInfo;