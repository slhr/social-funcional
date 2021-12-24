import React, {useState} from "react";
import {useSelector} from "react-redux";

import Post, {PostCreateForm} from "./Post";
import {Container} from "../../Styled/containers";
import styled from "styled-components";


const PostsHeaderContainer = styled(Container)`
  padding: 15px 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

const AddPostButton = styled.button`
  width: 25px;
  
  background-color: #E44D3A;
  color: #fff;
  border: 2px solid #dd3e2b;

  :hover {
    cursor: pointer;
  }

  :active {
    background-color: #fff;
    color: #dd3e2b;
  }
`;

const MyPosts = ({isOwner, isAuthorized}) => {
    const [editMode, setEditMode] = useState(false);
    const posts = useSelector(state => state.profile.posts);


    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <div>
            <PostsHeaderContainer>
                <h3>Posts</h3>
                {
                    isOwner &&
                    <AddPostButton onClick={toggleEditMode}>{editMode ? "-" : "+"}</AddPostButton>
                }
            </PostsHeaderContainer>

            <>
                {
                    editMode &&
                    <PostCreateForm toggleEditMode={toggleEditMode}/>
                }
                {
                    posts.map(p => <Post key={p.id} isAuthorized={isAuthorized} {...p} />).reverse()
                }
            </>
        </div>
    );
}


export default MyPosts;