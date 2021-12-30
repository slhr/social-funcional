import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams, Navigate} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import styled from "styled-components";
import Friends from "./Friends/Friends";


export const BlockContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-bottom: 25px;
`;


const Profile = () => {
    const authorizedUserId = useSelector(state => state.auth.userId);

    const pathParams = useParams();
    const isOwner = !pathParams.userId;
    const isAuthorized = !!authorizedUserId;
    const userId = pathParams.userId || authorizedUserId;

    const dispatch = useDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId));
            dispatch(getStatus(userId));
        }
    }, [dispatch, userId]);

    if (!userId) return <Navigate to={"/login"}/>;
    return (
        <div>
            <ProfileInfo isOwner={isOwner} />
            <BlockContainer>
                <Friends isOwner={isOwner} isAuthorized={isAuthorized}/>
                <MyPosts isOwner={isOwner} isAuthorized={isAuthorized}/>
            </BlockContainer>
        </div>)
        ;
};


const mapStateToProps = state => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
});

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(Profile);