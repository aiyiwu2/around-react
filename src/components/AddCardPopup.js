import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddCardPopup(props) {
    const [cardName, setCardName] =React.useState("");
	const [cardLink, setCardLink] =React.useState("");

	function handleSetCardName(evt) {
		setCardName(evt.target.value);
	  }
	  
	  function handleSetCardLink(evt) {
		setCardLink(evt.target.value);
	  }
	
	  function handleSubmit(evt) {
		evt.preventDefault();
		props.handleAddPlace({
		  name: cardName,
		  link: cardLink
		});
	  }

    return (
        <PopupWithForm
        name="add-card"
        title="New place"
        buttonText="Save"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        >

        <input id="card-title" type="text" name="name" placeholder="Title" className="popup__input popup__input_type_card-title" required minLength="2" maxLength="30" onChange={handleSetCardName} value={cardName} />

        <span id="card-title-error" className="popup__error"></span>

        <input id="card-url" type="url" name="link" placeholder="Image link" className="popup__input popup__input_type_url" required onChange={handleSetCardLink} value={cardLink} />

        <span id="card-url-error" className="popup__error"></span>


        </PopupWithForm>
    )
}

export default AddCardPopup;