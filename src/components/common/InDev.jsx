import React from "react";
import {Container} from "../Styled/containers";
import image from "../../assets/images/inProgress.jpg"
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const Wrapper = styled(Container)`
    text-align: center;
`

const InDev = () => {
    const userId = useSelector(state => state.auth.userId);

    if (!userId) return <Navigate to={"/login"} />

    return (
        <Wrapper>
            <img src={image} alt=""/>
            <div>Developing in progress</div>
        </Wrapper>
    );
};

export default InDev;