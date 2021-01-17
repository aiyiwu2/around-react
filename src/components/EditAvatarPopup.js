import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const [link, setLink] = useState()

    function handleLinkChange(e) {
        setLink(e.target.value)
    }

    function handleAvatarChange(e) {
        e.preventDefault()
        props.handleUpdateAvatar(link);
    }

    return (
        <PopupWithForm
            name="edit-avatar"
            title="Change profile picture"
            buttonText="Save"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleAvatarChange}
        >

            <input 
                id="avatar-image" 
                type="url" 
                name="avatar" 
                placeholder="Profile picture" 
                className="popup__input popup__input_type_avatar" 
                minLength="2" 
                required 
                onChange={handleLinkChange}
            />

            <span 
                id="avatar-image-error" 
                className="popup__error">
            </span>

        </PopupWithForm>
    )
}

export default EditAvatarPopup;