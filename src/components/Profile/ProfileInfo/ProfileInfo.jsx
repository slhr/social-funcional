import React, {useEffect, useState} from "react";
import Preloader from "../../common/Preloader";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import ProfileStatus from "./Status";
import {Container, FlexContainer} from "../../Styled/containers";
import styled from "styled-components";
import {BlockContainer} from "../Profile";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile, setAvatarPhoto} from "../../../redux/profile-reducer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

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

`;


const Rectangle = styled.div`
  width: 275px;
  height: 125px;
  background-color: #dd3e2b;
  position: absolute;
`;

const AvatarBlock = styled.div`
  position: relative;
  padding: 10px 10px;
  text-align: center;
`;

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const schema = yup.object().shape({});


const ProfileInfo = ({isOwner}) => {
    const [editMode, setEditMode] = useState(false);

    const profile = useSelector(state => state.profile.profile);
    const status = useSelector(state => state.profile.status);
    const dispatch = useDispatch();

    const {register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });


    const onSubmit = (values) => {
        dispatch(saveProfile(values))
            .then(() => {
                toggleEditMode();
            })
            .catch(e => {
                setError("serverError", {message: e.message});
            });
    };

    useEffect(() => {
        if (profile) {
            const fieldsToSet = {
                fullName: profile.fullName,
                aboutMe: profile.aboutMe,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                contacts: {...profile.contacts},
            };
            for (let field in fieldsToSet) {
                setValue(field, fieldsToSet[field]);
            }
        }

    }, [profile, setValue]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const changeAvatar = (e) => {
        if (e.target.files.length) {
            dispatch(setAvatarPhoto(e.target.files[0]));
        }
    };

    if (!profile) return <Preloader/>;

    return (
        <BlockContainer>
            <Wrapper>
                <Container>
                    <Rectangle/>
                    <AvatarBlock>
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
                    </AvatarBlock>
                </Container>

                <Container>
                    <AvatarBlock>
                        <div>Friends</div>
                        <div>55</div>
                    </AvatarBlock>
                </Container>

                <Container>
                    <AvatarBlock>
                        <div>Subscriptions</div>
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
                            ? <ProfileStatus status={status}/>
                            : <span>{status}</span>
                    }
                </InfoBlock>

                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>


                    <InfoBlock borderBottom>
                        <GridContainer>
                            <InfoItem field>AboutMe:</InfoItem>
                            <InfoItem>{
                                editMode
                                    ? <InputItem {...register("aboutMe")} type="text"/>
                                    : profile.aboutMe || "-"
                            }</InfoItem>
                        </GridContainer>

                        <GridContainer>
                            <InfoItem field>Looking for a job:</InfoItem>
                            <InfoItem>{
                                editMode
                                    ? <input type="checkbox" {...register("lookingForAJob")}/>
                                    : profile.lookingForAJob ? "yes" : "no"}</InfoItem>
                        </GridContainer>

                        <GridContainer>
                            <InfoItem field>Description:</InfoItem>
                            <InfoItem>{
                                editMode
                                    ? <InputItem type="text" {...register("lookingForAJobDescription")}/>
                                    : profile.lookingForAJobDescription || "-"}</InfoItem>
                        </GridContainer>
                    </InfoBlock>

                    <InfoBlock>
                        <InfoBlockHeader>Contact info</InfoBlockHeader>
                        {
                            Object.keys(profile.contacts).map(key => {
                                return (
                                    <GridContainer key={key}>
                                        <InfoItem field>{key}:</InfoItem>
                                        <InfoItem>{
                                            editMode
                                                ? <InputItem type="text" {...register(`contacts.${key}`)}/>
                                                : profile.contacts[key] || "-"}
                                        </InfoItem>
                                    </GridContainer>);
                            })
                        }
                        <GridContainer>
                            <div/>
                            <InfoItem> {editMode &&
                                <ProfileButton type="submit">Save</ProfileButton>}</InfoItem>
                        </GridContainer>
                        <GridContainer>
                            <div/>
                            <div>
                                {
                                    editMode &&
                                    errors.serverError && errors.serverError.message.split(",").map(message => {
                                        return <ErrorMessage key={message}>{message}</ErrorMessage>;
                                    })
                                }
                            </div>
                        </GridContainer>
                    </InfoBlock>
                </form>
            </Container>
        </BlockContainer>
    );
};

export default ProfileInfo;