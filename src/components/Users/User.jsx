import React from "react";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assets/images/default-avatar.png";
import {Container} from "../Styled/containers";
import {Avatar} from "../Styled/image";
import styled from "styled-components";


const UserContainer = styled(Container)`
  margin: 35px 0 15px 0;
  text-align: center;
  border: 1px solid #e4e4e4;
  padding: 25px 0 0 0;
`;

const ViewProfileLink = styled(NavLink)`
  border-top: 1px solid #e4e4e4;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  padding: 18px 0;
`

const UserName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const UserStatus = styled.span`
  display: inline-block;

  font-size: 13px;
  color: #6c757d;
  padding: 5px 10px 10px 15px;
  height: 20px;
  
  
  -webkit-line-clamp: 1; 
  display: -webkit-box;
  word-wrap: anywhere;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const FollowingButton = styled.button`
  margin: 15px;
  padding: 5px 15px;
  border: none;
  
  width: 80px;
  height: 35px;
  background-color: #28a745;
  color: #f2f2f2;
  transition: .2s ease-in-out;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }

  :hover:before {
    left: 150px;
    transition: .5s ease-in-out;
  }

  :active {
    background-color: #dd3e2b;
    color: #fff;
  }
  
`;

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <UserContainer width="220px">
            <div>


                    <Avatar width="100px" src={user.photos.small || defaultAvatar} alt="ava"/>

            

                <UserName>{user.name}</UserName>

                <UserStatus>{user.status ? user.status : "-"}</UserStatus>

                <div>
                    {
                        user.followed
                            ? <FollowingButton disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</FollowingButton>
                            : <FollowingButton disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</FollowingButton>
                    }
                </div>


            </div>


            <ViewProfileLink to={"/profile/" + user.id}>
                View Profile
            </ViewProfileLink>

        </UserContainer>
    );

}

export default User;