import React from "react";
import styled from "styled-components";

import preloader from "../../assets/images/preloader.gif";

const Wrapper = styled.div`
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
`;

const StyledPreloader = styled.img`
  width: 80px;
`;

const Preloader = () => {
    return (
        <Wrapper>
            <StyledPreloader src={preloader} alt="preloader"/>
        </Wrapper>
    );
};

export default Preloader;