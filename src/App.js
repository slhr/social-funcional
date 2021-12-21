import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {connect} from "react-redux";
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
`


const App = ({initialized, initializeApp}) => {

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    if (!initialized) return <Preloader/>

    return (
        <AppWrapper>
            <Header/>
            <Navbar/>
            <AppRouter/>
        </AppWrapper>
    );
};

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);


