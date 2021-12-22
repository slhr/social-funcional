import React from "react";
import {useSelector} from "react-redux";
import {Avatar} from "../../Styled/image";
import defaultAvatar from "../../../assets/images/default-avatar.png"

const Post = (props) => {

    let avatarPath = useSelector(state => state.profile?.profile?.photos?.large || defaultAvatar);

    return (
        <div>
            <Avatar src={avatarPath} alt="avatar" width="100px"/>
            {props.message}
            <div>
                <span>likes:</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;