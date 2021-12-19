import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

const AppWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1200px;

  grid-template-rows: 85px 1fr;
  grid-template-columns: 2fr 10fr;

  grid-template-areas:
    "h h"
    "n c";
  min-height: 100vh;
`


const App = () => {
    return (
        <BrowserRouter>
            <AppWrapper>
                <Header/>
                <Navbar/>
                <AppRouter/>
            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;


