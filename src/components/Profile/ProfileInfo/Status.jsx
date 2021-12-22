import React, {useEffect, useState} from "react";

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
            ? <input autoFocus={true}
                     onBlur={deactivateEditMode}
                     type="text"
                     value={formStatus}
                     onChange={onStatusChange}/>

            : <span onDoubleClick={activateEditMode}>{status}</span>


    );
};

export default ProfileStatus;