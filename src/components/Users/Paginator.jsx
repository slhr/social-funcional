import React, {useState} from "react";
import {Container} from "../Styled/containers";
import styled from "styled-components";

const PaginatorContainer = styled(Container)`
  padding: 10px;
  text-align: center;
`

const NavigationButton = styled.button`
  padding: 5px 15px;
  border: 2px solid #dd3e2b;

  color: #dd3e2b;
  transition: .2s ease-in-out;
  border-radius: 5px;

  :hover {
    background: #dd3e2b;
    color: #fff;
    cursor: pointer;
  }

  :hover:before {
    left: 150px;
    transition: .5s ease-in-out;
  }

  :active {
    background-color: #fff;
    color: #dd3e2b;
  }
`;

const PageNumberFrame = styled.span`
  margin: 0 5px 0 5px;
  display: inline-block;
  font-size: 16px;
  width: 37px;
  height: 29px;
  border: 2px solid #dd3e2b;
  line-height: 23px;
  border-radius: 5px;


  :hover {

    cursor: pointer;
  }

  background: ${props => props.isActive ? "#dd3e2b" : "#fff"};
  color: ${props => props.isActive ? "#fff" : ""};
`;

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 3}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;


    const setPreviousPortion = () => {
        if (portionNumber > 1) {
            setPortionNumber(portionNumber - 1)
        }
    }

    const setNextPortion = () => {
        if (portionCount > portionNumber) {
            setPortionNumber(portionNumber + 1)

        }
    }

    return (

        <PaginatorContainer>
            <NavigationButton onClick={setPreviousPortion}>
                prev
            </NavigationButton>

            {
                !totalUsersCount &&
                <>
                    <PageNumberFrame isActive>1</PageNumberFrame>
                    <PageNumberFrame>2</PageNumberFrame>
                    <PageNumberFrame>3</PageNumberFrame>
                </>

            }

            {
                pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                        return <PageNumberFrame key={p}
                                                isActive={p === currentPage}
                                                onClick={() => {
                                                    if (p !== currentPage) {
                                                        onPageChanged(p)
                                                    }
                                                }
                                                }>{p}</PageNumberFrame>
                    })
            }
            <NavigationButton onClick={setNextPortion}>next</NavigationButton>


        </PaginatorContainer>

    )
}

export default Paginator;