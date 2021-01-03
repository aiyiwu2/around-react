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
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';



function App() {
    const [userInfo, setUserInfo] = React.useState({});
    const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
	const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
	const [cardToDelete, setCardToDelete] = React.useState("");
	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [cardLink, setCardLink] = React.useState("");
  const [cardTitle, setCardTitle] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");
    
    function handleEditAvatarClick() {
		setIsEditAvatarOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfileOpen(true);
	}
	function handleAddPlaceClick() {
		setIsAddPlaceOpen(true);
	}

	function handleDeleteClick(id) {
		setCardToDelete(id);
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
  
  
	function handleCardDelete() {
		api
			.removeCard(cardToDelete)
			.then((res) => {
				const listCopy = cards.filter((c) => c._id !== cardToDelete);
				setCards(listCopy);
			})
			.then(() => setIsDeleteOpen(false))
			.catch((err) => console.log(err));
	}

	function handleAddPlace({ name, link }) {
		api
			.addCard({ name, link })
			.then((newCard) => {
				setCards([newCard, ...cards]);
			})
			.then(() => setIsAddPlaceOpen(false))
			.catch((err) => console.log(err));
	}

	function handleUpdateUser({ name, about }) {
		api
			.setUserInfo({ name, about })
			.then((res) => {
				setCurrentUser(res);
			})
			.then(() => setIsEditProfileOpen(false))
			.catch((err) => console.log(err));
	}

	function handleUpdateAvatar(avatar) {
		api
			.setAvatar({ avatar })
			.then((res) => {
				setCurrentUser(res);
			})
			.then(() => setIsEditAvatarOpen(false))
			.catch((err) => console.log(err));
  }
  
  function handleLikeClick(card) {

    const isLiked = card.likes.some((i) => i._id === userInfo._id);
    let res;
  
    if (isLiked === false) {
      res = api.addCardLike(card._id);
    } else {
      res = api.deleteCardLike(card._id);
	}
	
	console.log(isLiked)

    res
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
	  .catch((err) => console.log(err));
	  
	  debugger;
  }

  React.useEffect(() => {
		api
			.getUserInfo()
			.then((res) => {

				console.log(res);
				setCurrentUser(res);
				//setUserName(res);
				//setUserDescription(res);
				//setUserAvatar(res);
			})

	.then(()=>{
		api
			.getCardList()
			.then((res) => {
				console.log(res);
				setCards(
					res.map((card, index) => ({
						name: card.name,
						link: card.link,
						likes: card.likes,
						_id: card._id,
						owner: card.owner,
						key: index,
					}))
				);
			})
			.catch((err) => console.log(err));
	}, [])

	.catch((err) => console.log(err));
}, []);
   
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page__container">

            <Header />

            <Main 
                cards={cards}
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
        handleCardClick={handleCardClick}
        handleDeleteClick={handleDeleteClick}
				handleLikeClick={handleLikeClick}
            />

            <Footer />

            <AddCardPopup isOpen={isAddPlaceOpen} onClose={handlePopupClose} handleAddPlace={handleAddPlace} />

            <EditAvatarPopup isOpen={isEditAvatarOpen} onClose={handlePopupClose} handleUpdateAvatar={handleUpdateAvatar} />

            <EditProfilePopup isOpen={isEditProfileOpen} onClose={handlePopupClose} handleUpdateUser={handleUpdateUser} />

            <DeleteCardPopup isOpen={isDeleteOpen} onClose={handlePopupClose} onDeleteCard={handleCardDelete} />

            <PopupWithImage
                isOpen={isImagePopupOpen}
                onClose={handlePopupClose}
                title={cardTitle}
                link={cardLink}
            />
        
        
            
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
