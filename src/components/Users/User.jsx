import React from "react";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assets/images/default-avatar.png";
import {Container} from "../Profile/Profile";
import {Avatar} from "../Styled/image";
import styled from "styled-components";


const UsersContainer = styled(Container)`
  margin: 15px;
  text-align: center;
`;


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <UsersContainer width="200px">
            <div>
                <NavLink to={"/profile/" + user.id}>
                    <Avatar width="150px" src={user.photos.small || defaultAvatar} alt="ava"/>
                </NavLink>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status ? user.status : "any status"}</div>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </div>
        </UsersContainer>
    );

}

export default User;