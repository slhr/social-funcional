import React, {useState} from "react";
import Preloader from "../../common/Preloader";
import {ContainerBlock} from "../Profile";
import {useSelector} from "react-redux";
import ProfileAvatarBlock from "./ProfileAvatarBlock";
import ProfileTextInfo from "./ProfileTextInfo";


const ProfileInfo = ({isOwner}) => {
    const [editMode, setEditMode] = useState(false);
    const profile = useSelector(state => state.profile.profile);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    if (!profile) return <Preloader/>;

    return (
        <ContainerBlock>
            <ProfileAvatarBlock profile={profile}
                                isOwner={isOwner}
                                toggleEditMode={toggleEditMode}/>

            <ProfileTextInfo profile={profile}
                             editMode={editMode}
                             isOwner={isOwner}
                             toggleEditMode={toggleEditMode}/>
        </ContainerBlock>
    );
};


export default ProfileInfo;