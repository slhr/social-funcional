import React from "react";
import {Container} from "../../Styled/containers";
import styled from "styled-components";

const FriendsContainer = styled.div`
  height: 200px;
  padding: 15px;

`;

const FriendsWrapper = styled.div`
  margin-bottom: 25px;
`;

const Friends = () => {
    return (
        <div>
            <FriendsWrapper>
                <Container>
                    <FriendsContainer>
                        <h3>Friends</h3>
                    </FriendsContainer>
                </Container>
            </FriendsWrapper>

            <FriendsWrapper>
                <Container>
                    <FriendsContainer>
                        <h3>Friends Online</h3>
                    </FriendsContainer>
                </Container>
            </FriendsWrapper>
        </div>


    );
};

export default Friends;