import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = (e) => {
        setEditMode(false); 
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {   // При изменении props.status будет заново устанавливаться setStatus
        setStatus(props.status) // т.е. будет срабатывать только при изменении props
    }, [props.status]);

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >My status: {status}</span>
                </div>}
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        type="text"
                        value={status}
                        onBlur={deactivateEditMode}
                        autoFocus={true} />
                </div>}
        </div>
    )
};

export default ProfileStatusWithHooks;