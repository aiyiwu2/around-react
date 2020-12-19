import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import AddCardPopup from './AddCardPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import PopupWithImage from './PopupWithImage.js';
import api from '../utils/Api.js';



function App() {
    const [userInfo, setUserInfo] = React.useState({name: "Aiyi Wu", job: "Student"});
    const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
	const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [cardLink, setCardLink] = React.useState("");
	const [cardTitle, setCardTitle] = React.useState("");
    
    function handleEditAvatarClick() {
		setIsEditAvatarOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfileOpen(true);
	}
	function handleAddPlaceClick() {
		setIsAddPlaceOpen(true);
	}

	function handleDeleteClick(card) {
		setIsDeleteOpen(true);
    }
    
    function handleCardClick(link, title) {
		setIsImagePopupOpen(true);
		setCardLink(link);
		setCardTitle(title);
    }

    function handlePopupClose() {
		setIsAddPlaceOpen(false);
		setIsEditAvatarOpen(false);
		setIsEditProfileOpen(false);
		setIsImagePopupOpen(false);
		setIsDeleteOpen(false);
	}
    
  return (
    <div className="page__container">

            <Header />

            <Main 
                userInfo={userInfo}
                onEditProfile={setUserInfo}
                isEditAvatarOpen={isEditAvatarOpen}
                isEditProfileOpen={isEditProfileOpen}
                isAddPlaceOpen={isAddPlaceOpen}
                isDeleteOpen={isDeleteOpen}
                isImagePopupOpen={isImagePopupOpen}
                handleEditAvatarClick={handleEditAvatarClick}
				handleEditProfileClick={handleEditProfileClick}
				handleAddPlaceClick={handleAddPlaceClick}
				handleDeleteClick={(card) => {handleDeleteClick(card)}}
				handleCardClick={handleCardClick}
				onCardClick={(data) => {
					handleCardClick(data);
				}}
				onDeleteClick={(card) => {
					handleDeleteClick(card);
				}}
            />

            <Footer />

            <AddCardPopup isOpen={isAddPlaceOpen} onClose={handlePopupClose} />

            <EditAvatarPopup isOpen={isEditAvatarOpen} onClose={handlePopupClose} />

            <EditProfilePopup isOpen={isEditProfileOpen} onClose={handlePopupClose} />

            <DeleteCardPopup isOpen={isDeleteOpen} onClose={handlePopupClose} />

            <PopupWithImage
                isOpen={isImagePopupOpen}
                onClose={handlePopupClose}
                title={cardTitle}
                link={cardLink}
            />
        
        
            
    </div>
  );
}

export default App;
