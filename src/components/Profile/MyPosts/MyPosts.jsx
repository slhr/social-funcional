import React from "react";
import {Container} from "../../Styled/containers";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addPostCreator} from "../../../redux/profile-reducer";
import Post from "./Post";

const PostsContainer = styled.div`
  margin-top: 25px;
  background-color: #fff;
`;

const MyPosts = () => {
    const posts = useSelector(state => state.profile.posts);
    const dispatch = useDispatch();

    const addPost = newPostText => {
        dispatch(addPostCreator(newPostText));
    };

    return (
        <PostsContainer>
            <Container>
                <h3>Posts</h3>
                    {
                        posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
                    }
            </Container>
    </PostsContainer>
    );
}



export default MyPosts;