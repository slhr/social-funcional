import styled from "styled-components";


export const Container = styled.div`
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 5px #ccc;
  width: ${props => props.width || "100%"};
  background-color: #fff;

`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: ${props => props.flexWrap || "wrap"};
  width: ${props => props.width || "100%"};
  justify-content: ${props => props.justify || "center"};
`;


export const IconBlock = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  padding: 15px 0 0;

  img:hover {
    cursor: pointer;
  }
`;