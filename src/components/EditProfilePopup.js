import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
  
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleDescriptionChange(e) {
      setDescription(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault()
        props.handleUpdateUser(name, description)
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    return (
        <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        buttonText="Save"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={submitHandler}
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
                value={name}
                onChange={handleNameChange}
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
                value={description}
                onChange={handleDescriptionChange}
            />

            <span 
                id="profile-job-error" 
                className="popup__error">
            </span>


        </PopupWithForm>
    )
}

export default EditProfilePopup;