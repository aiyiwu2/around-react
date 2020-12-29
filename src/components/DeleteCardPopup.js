import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup(props) {
    function handleSubmit(evt) {
		evt.preventDefault();
		props.onDeleteCard();
	}
    return (
        <PopupWithForm
            name="delete-card"
            title="Are you sure?"
            buttonText="Yes"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        ></PopupWithForm>
    )
}

export default DeleteCardPopup;