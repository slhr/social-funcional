import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {saveProfile} from "../../../redux/profile-reducer";
import React, {useEffect} from "react";
import {Container, FlexContainer} from "../../Styled/containers";
import ProfileStatus from "./Status";
import {Button} from "./ProfileAvatarBlock";
import styled from "styled-components";


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


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;


const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;


const ProfileTextInfo = ({profile, isOwner, editMode, toggleEditMode}) => {
    const status = useSelector(state => state.profile.status);
    const dispatch = useDispatch();

    const {register, handleSubmit, setValue, setError, formState: {errors}} = useForm({
        mode: "onSubmit",
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

    return (
        <Container>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                            <Button type="submit">Save</Button>}</InfoItem>
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
    );
};

export default ProfileTextInfo;