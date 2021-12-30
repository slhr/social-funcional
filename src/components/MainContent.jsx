import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import routes from "../router/router";
import Profile from "./Profile/Profile";

const Wrapper = styled.div`
  grid-area: c;
  background-color: #f2f2f2;
  margin-left: 25px;
`;

const MainContent = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path="/profile" element={<Profile/>}>
                    <Route path=":userId" element={<Profile/>}/>
                </Route>

                {routes.map(route => <Route {...route} key={route.path}/>)}
                <Route path="/" element={<Navigate to="/login"/>}/>
            </Routes>
        </Wrapper>
    );
};

export default MainContent;