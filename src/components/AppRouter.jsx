import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import routes from "../router/router";
import Profile from "./Profile/Profile";

const RouterWrapper = styled.div`
  grid-area: c;
  background-color: #f2f2f2;
  margin: 0 0 0 25px;
`;

const AppRouter = () => {
    return (
        <RouterWrapper>
            <Routes>
                <Route path="/profile" element={<Profile/>}>
                    <Route path=":userId" element={<Profile/>}/>
                </Route>

                {routes.map(route => <Route {...route} key={route.path}/>)}
                <Route path="/" element={<Navigate to="/login"/>}/>
            </Routes>
        </RouterWrapper>
    );
};

export default AppRouter;