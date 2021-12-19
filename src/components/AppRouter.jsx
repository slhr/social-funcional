import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import routes from "../router/router";

const RouterWrapper = styled.div`
  grid-area: c;
  background-color: #fff;
  margin: 0 0 0 25px;
`

const AppRouter = () => {
    return (
        <RouterWrapper>
            <Routes>
                { routes.map(route => <Route {...route} key={route.path}/>) }
                <Route path="/" element={<Navigate to="/login" />}/>
            </Routes>
        </RouterWrapper>
    );
};

export default AppRouter;