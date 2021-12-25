import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import ProfileStatus from "./Status";
import {Container, FlexContainer} from "../../Styled/containers";
import styled from "styled-components";
import {BlockContainer} from "../Profile";

const InfoBlock = styled.div`
  margin: 15px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  .fullName {
    font-size: 28px;
    font-weight: bold;
  }
`

const InfoItem = styled.span`
    padding: 5px 0 5px 0;
`



const Rectangle = styled.div`
  width: 275px;
  height: 125px;
  background-color: #dd3e2b;
  position: absolute;
`

const AvatarDiv = styled.div`
  position: relative;
  padding: 10px 10px;
  text-align: center;
`

const Wrapper = styled.div`
  margin-right: 25px;
`;

const NameBlock = styled.div`
  display: flex;
  justify-content: space-between;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const ProfileInfo = ({profile, status, updateStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    if (!profile) return <Preloader/>

    return (
        <BlockContainer>

            <Wrapper>
                <FlexContainer>
                    <Container>
                        <Rectangle/>
                        <AvatarDiv>
                            <Avatar bordered width="200px"
                                    src={profile.photos.large ? profile.photos.large : defaultAvatar}
                                    alt=""/>
                            <div>
                                {isOwner && <button onClick={toggleEditMode}>Edit info</button>}
                            </div>
                        </AvatarDiv>

                    </Container>
                </FlexContainer>
            </Wrapper>


            <Container>
                <InfoBlock>

                    <NameBlock>
                        <div className="fullName">{profile.fullName}</div>
                        <div>Online</div>
                    </NameBlock>


                    {
                        isOwner
                            ?
                            <div className="status">
                                <ProfileStatus status={status} updateStatus={updateStatus}/>
                            </div>

                            : <div className="status">{status}</div>
                    }
                </InfoBlock>


                <InfoBlock>
                    <GridContainer>
                        <InfoItem>AboutMe:</InfoItem>
                        <InfoItem>{profile.aboutMe || "-"}</InfoItem>
                    </GridContainer>

                    <GridContainer>
                        <InfoItem>Looking for a job:</InfoItem>
                        <InfoItem>{profile.lookingForAJob ? "yes" : "no"}</InfoItem>
                    </GridContainer>

                    <GridContainer>
                        <InfoItem>Skills:</InfoItem>
                        <InfoItem>{profile.lookingForAJobDescription || "-"}</InfoItem>
                    </GridContainer>
                </InfoBlock>

                <InfoBlock>
                    <div className="contacts">Contacts:</div>
                    {
                            Object.keys(profile.contacts).map(key => {

                                return (
                                    <GridContainer key={key}>
                                        <InfoItem>{key}:</InfoItem>
                                        <InfoItem>{profile.contacts[key] || "-"}</InfoItem>
                                    </GridContainer>);


                        })
                    }
                </InfoBlock>


                {/*{editMode*/}
                {/*    ?*/}
                {/*    <>*/}
                {/*        <>*/}


                {/*            <div className="aboutMe">AboutMe:<input type="text"/></div>*/}

                {/*            <div className="lookingForAJob">Looking for a job <input type="checkbox"/></div>*/}
                {/*            <div className="lookingForAJobDescription">Skills: <input type="text"/></div>*/}
                {/*        </>*/}

                {/*        <>*/}
                {/*            <div className="contacts">Contacts:</div>*/}
                {/*            {*/}
                {/*                Object.keys(profile.contacts).map(key => {*/}
                {/*                    return <div key={key}>{key}: <input type="text"/></div>*/}

                {/*                })*/}
                {/*            }*/}

                {/*            <button onClick={deactivateEditMode}>Save</button>*/}

                {/*        </>*/}

                {/*    </>*/}
                {/*    :*/}
                {/*    <>*/}
                {/*        <>*/}

                {/*            <div className="aboutMe">AboutMe: {profile.aboutMe}</div>*/}
                {/*            <div className="lookingForAJob">Looking for a*/}
                {/*                job: {profile.lookingForAJob ? "yes" : "no"}</div>*/}
                {/*            <div className="lookingForAJobDescription">Skills: {profile.lookingForAJobDescription}</div>*/}
                {/*        </>*/}

                {/*        <>*/}
                {/*            <div className="contacts">Contacts:</div>*/}
                {/*            {*/}
                {/*                Object.keys(profile.contacts).map(key => {*/}
                {/*                    if (profile.contacts[key]) {*/}
                {/*                        return <div key={key} className="contact">{key}: {profile.contacts[key]}</div>*/}
                {/*                    }*/}
                {/*                    return null;*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </>*/}
                {/*    </>*/}
                {/*}*/}


            </Container>

        </BlockContainer>
    );
}

export default ProfileInfo;