import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";


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
`;


const App = () => {
    const initialized = useSelector(state => state.app.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) return <Preloader/>;

    return (
        <AppWrapper>
            <Header/>
            <Navbar/>
            <MainContent/>
        </AppWrapper>
    );
};

export default App;







