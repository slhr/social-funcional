import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Profile from "./components/Profile/Profile";

const AppWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1200px;

  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;

  grid-template-areas:
    "h h"
    "n c";
  min-height: 100vh;
`


const ContentWrapper = styled.div`
  grid-area: c;
  background-color: cornflowerblue;
`

const HeaderWrapper = styled.div`
  grid-area: h;
  background-color: royalblue;
`

const NavigationWrapper = styled.div`
  grid-area: n;
  background-color: lightskyblue;
  padding: 15px;
`



const App = () => {
    return (
        <BrowserRouter>
            <AppWrapper>
                <HeaderWrapper>Header</HeaderWrapper>

                <NavigationWrapper>Nav</NavigationWrapper>

                <ContentWrapper>
                    <Routes>
                        <Route path="/profile/:userId" element={<Profile />} />
                        <Route path="/dialogs" element={<div>Dialogs</div>} />
                        <Route path="/users" element={<div>Users</div>}/>
                        <Route path="/music" element={<div>Music</div>}/>
                        <Route path="/settings" element={<div>Settings</div>}/>
                        <Route path="/login" element={<div>Login</div>}/>
                    </Routes>

                </ContentWrapper>

            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;


