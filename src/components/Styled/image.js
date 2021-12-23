import styled from "styled-components";

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`

export const Logo50 = styled.img`
  width: 50px;
`

export const Avatar = styled.img`
  width: ${props => props.width || "50px"};
  border-radius: 50%;
  border: ${props => props.bordered ? "10px solid #fff" : "none"}; 
`

export const Avatar150 = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 1px solid #ccc;
`