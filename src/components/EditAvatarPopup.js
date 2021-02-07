import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef() 
    function handleSubmit(e) {
        debugger;
        e.preventDefault();
        console.log(avatarRef)
        console.log(avatarRef.current)
        debugger;
        props.handleUpdateAvatar(avatarRef.current.value)
    }
    return (
        <PopupWithForm
            name="edit-avatar"
            title="Change profile picture"
            buttonText="Save"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >

            <input 
                id="avatar-image" 
                type="url" 
                name="avatar" 
                placeholder="Profile picture" 
                className="popup__input popup__input_type_avatar" 
                minLength="2" 
                required 
            />

            <span 
                id="avatar-image-error" 
                className="popup__error">
            </span>

        </PopupWithForm>
    )
}

export default EditAvatarPopup;