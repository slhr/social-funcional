import styled from "styled-components";

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: ${props => props.margins || "0 15px 0 0"};
  cursor: ${props => props.pointer ? "pointer" : "auto"};
`;

export const Logo = styled.img`
  width: ${props => props.width || "50px"};
`;

export const Avatar = styled.img`
  width: ${props => props.width || "50px"};
  border-radius: 50%;
  border: ${props => props.bordered ? "10px solid #fff" : "none"};
`;

export const Avatar150 = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;