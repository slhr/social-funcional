import React from "react";
import {Container} from "../../Styled/containers";
import styled from "styled-components";
import Friend from "./Friend";

const initialFriends = [
    {id: 1, name: "John"},
    {id: 2, name: "John"},
    {id: 3, name: "John"},
    {id: 4, name: "John"},
    {id: 5, name: "John"},
    {id: 6, name: "John"},
];

const initialMutualFriends = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "It-kamas"},
];


const FriendsContainer = styled.div`
  padding: 15px;
`;

const FriendsWrapper = styled.div`
  margin: 0 25px 25px 0;
`;

const FriendsFrame = styled.div`
  margin-top: 15px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  justify-content: stretch;
  text-align: center;
`

const FriendsHeader = styled.h3`
  padding: 0 5px 10px 5px;
  border-bottom: 1px solid #ccc;
`;


const Friends = ({isOwner, isAuthorized}) => {
    return (
        <div>
            {
                isOwner
                    ? (<>
                        <FriendsWrapper>
                            <Container>
                                <FriendsContainer>
                                    <FriendsHeader>Friends</FriendsHeader>
                                    <FriendsFrame>
                                        {
                                            initialFriends.map(friend => {
                                                return <Friend key={friend.id} {...friend}/>
                                            })
                                        }
                                    </FriendsFrame>
                                </FriendsContainer>
                            </Container>
                        </FriendsWrapper>

                        <FriendsWrapper>
                            <Container>
                                <FriendsContainer>
                                    <FriendsHeader>Friends Online</FriendsHeader>
                                    <FriendsFrame>
                                        {
                                            initialMutualFriends.map(friend => {
                                                return <Friend key={friend.id} {...friend}/>
                                            })
                                        }
                                    </FriendsFrame>
                                </FriendsContainer>
                            </Container>
                        </FriendsWrapper>
                    </>)
                    : (<>
                        {isAuthorized &&
                            <FriendsWrapper>
                                <Container>
                                    <FriendsContainer>
                                        <FriendsHeader>Mutual friends</FriendsHeader>
                                        <FriendsFrame>
                                            {
                                                initialMutualFriends.map(friend => {
                                                    return <Friend key={friend.id} {...friend}/>
                                                })
                                            }
                                        </FriendsFrame>
                                    </FriendsContainer>
                                </Container>
                            </FriendsWrapper>
                        }
                        <FriendsWrapper>
                            <Container>
                                <FriendsContainer>
                                    <FriendsHeader>Friends</FriendsHeader>
                                    <FriendsFrame>
                                        {
                                            initialFriends.map(friend => {
                                                return <Friend key={friend.id} {...friend}/>
                                            })
                                        }
                                    </FriendsFrame>
                                </FriendsContainer>
                            </Container>
                        </FriendsWrapper>
                    </>)
            }
        </div>

    );
};

export default Friends;