import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddCardPopup(props) {
    return (
        <PopupWithForm
        name="add-card"
        title="New place"
        buttonText="Save"
        isOpen={props.isOpen}
        onClose={props.onClose}
        >

        <input id="card-title" type="text" name="name" placeholder="Title" className="popup__input popup__input_type_card-title" required minLength="2" maxLength="30" />

        <span id="card-title-error" className="popup__error"></span>

        <input id="card-url" type="url" name="link" placeholder="Image link" className="popup__input popup__input_type_url" required />

        <span id="card-url-error" className="popup__error"></span>


        </PopupWithForm>
    )
}

export default AddCardPopup;