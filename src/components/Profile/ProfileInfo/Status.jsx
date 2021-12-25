import React, {useEffect, useState} from "react";
import styled from "styled-components";


const Status = styled.div`
  padding: 5px 0 5px 0;
  :hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const StatusInput = styled.input`
  padding: 5px 0 5px 0;
  font-size: 16px;
  width: 100%;
  height: 28px;
`

const ProfileStatus = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [formStatus, setStatus] = useState(status);

    useEffect( () => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        updateStatus(formStatus);
        setEditMode(false);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (

        editMode
            ? <StatusInput autoFocus={true}
                     onBlur={deactivateEditMode}
                     type="text"
                     value={formStatus}
                     onChange={onStatusChange}/>

            : <Status onClick={activateEditMode}>{status ? status : "set status"}</Status>


    );
};

export default ProfileStatus;