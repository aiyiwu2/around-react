import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {
    return (
        <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        buttonText="Save"
        isOpen={props.isOpen}
        onClose={props.onClose}
        >

            <input 
                id="profile-name" 
                type="text" 
                name="name" 
                placeholder="Name" 
                className="popup__input popup__input_type_name" 
                required 
                minLength="2" 
                maxLength="40" 
            />

            <span 
                id="profile-name-error" 
                className="popup__error">
            </span>

            <input 
                id="profile-job" 
                type="text" 
                name="about" 
                placeholder="About me" 
                className="popup__input popup__input_type_bio" 
                required 
                minLength="2" 
                maxLength="200" 
            />

            <span 
                id="profile-job-error" 
                className="popup__error">
            </span>


        </PopupWithForm>
    )
}

export default EditProfilePopup;