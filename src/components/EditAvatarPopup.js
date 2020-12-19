import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    return (
        <PopupWithForm
            name="edit-avatar"
            title="Change profile picture"
            buttonText="Save"
            isOpen={props.isOpen}
            onClose={props.onClose}
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