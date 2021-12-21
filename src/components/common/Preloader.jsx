import React from "react";
import styled from "styled-components"

import preloader from "../../assets/images/preloader.gif"

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%
`

const Preloader = () => {
    return (
        <Wrapper>
            <img src={preloader} alt="preloader"/>
        </Wrapper>
    );
};

export default Preloader;