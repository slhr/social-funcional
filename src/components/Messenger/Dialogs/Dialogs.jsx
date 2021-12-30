import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import DialogItem from "./DialogItem";


const DialogsList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;
`;


const Dialogs = () => {
    const dialogs = useSelector(state => state.messenger.dialogs);

    return (
        <DialogsList>
            {
                dialogs.map(dialog => {
                    return (
                        <DialogItem dialog={dialog} key={dialog.id}/>
                    );
                })
            }
        </DialogsList>
    );
};


export default Dialogs;