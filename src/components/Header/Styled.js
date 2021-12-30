import styled from "styled-components";

export const HeaderPanel = styled.div`
  grid-area: h;
  background-color: #e44d3a;
  padding: 0 0 0 10px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const MenuButton = styled.button`
  height: 60px;
  width: 150px;
  background-color: transparent;
  border: 1px solid #dd3e2b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;

  a {
    text-decoration: none;
    display: block;
    width: 100%;
    line-height: 60px;
    color: #fff;
    font-weight: bold;
  }
`;
export const StyledList = styled.div`
  width: 150px;
  background-color: #fff;
  list-style-type: none;
  position: absolute;
  box-shadow: 1px 1px 5px #ccc;
`;

export const MenuBlock = styled.ul`
  position: relative;
  z-index: 5;
`;

export const StyledLI = styled.li`
  padding: 10px 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    color: #dd3e2b;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  a:hover {
    color: #dd3e2b;
  }
`;

