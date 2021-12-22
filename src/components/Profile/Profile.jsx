import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams, Navigate} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";



const Profile = ({profile, status, authorizedUserId, getUserProfile, getStatus, updateStatus}) => {
    const params = useParams();
    const userId = params.userId || authorizedUserId;

    useEffect(() => {
        if (userId) {
            getUserProfile(userId);
            getStatus(userId);
        }

    }, [getStatus, getUserProfile, userId]);

    if (!userId) return <Navigate to={"/login"} />
    return (<div>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}/>
        <MyPosts />
    </div>);
};


const mapStateToProps = state => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
});

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(Profile);