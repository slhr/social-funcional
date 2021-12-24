import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPostCreator} from "../../../redux/profile-reducer";
import Post from "./Post";
import {Container} from "../../Styled/containers";
import styled from "styled-components";


const PostsHeaderContainer = styled(Container)`
  padding: 15px 25px;
  margin-bottom: 25px;
`;

const MyPosts = () => {
    const posts = useSelector(state => state.profile.posts);
    const dispatch = useDispatch();

    const addPost = newPostText => {
        dispatch(addPostCreator(newPostText));
    };

    return (
        <div>
            <PostsHeaderContainer>
                <h3>Posts</h3>
            </PostsHeaderContainer>

            <>
                {
                    posts.map(p => <Post key={p.id} {...p} />)
                }
            </>
        </div>
    );
}


export default MyPosts;