import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup(props) {
    return (
        <PopupWithForm
            name="delete-card"
            title="Are you sure?"
            buttonText="Yes"
            isOpen={props.isOpen}
            onClose={props.onClose}
        ></PopupWithForm>
    )
}

export default DeleteCardPopup;