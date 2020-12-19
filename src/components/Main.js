import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState("");
	const [userDescription, setUserDescription] = React.useState("");
	const [userAvatar, setUserAvatar] = React.useState("");
	const [userCards, setUserCards] = React.useState([]);

    React.useEffect(() => {
		api
			.getUserInfo()
			.then((res) => {

				console.log(res);
				setUserName(res);
				setUserDescription(res);
				setUserAvatar(res);
			})

	//Calls the initial cards from the API --don't forget the empty array
	.then(()=>{
		api
			.getCardList()
			.then((res) => {
				console.log(res);
				setUserCards(
					res.map((card) => ({
						name: card.name,
						link: card.link,
						likes: card.likes,
						_id: card._id,
						owner: card.owner,
					}))
				);
			})
			.catch((err) => console.log(err));
	}, [])

	.catch((err) => console.log(err));
}, []);

    return (
        <main className="content">

                <section className="profile">

                    <div className="profile__avatar">

                        <img className="profile__picture" alt="Profile picture" src={userAvatar.avatar} /> 

                        <div className="profile__avatar-edit" onClick={props.handleEditAvatarClick}></div>
                        
                    </div>

                    <div className="profile__info">

                        <h1 className="profile__title">{userName.name}</h1>

                        <p className="profile__subtitle">{userDescription.about}</p>

                        <button className="profile__edit" onClick={props.handleEditProfileClick}></button>
                    
                    </div>
                
                    <button className="profile__add-button" onClick={props.handleAddPlaceClick}></button>
                
                </section>

                <section className="cards">

                    <ul className="cards__list">

                        {userCards.map((card) => (
                            <Card
							key={card._id}
							src={card.link}
							title={card.name}
							likes={card.likes.length}
							owner={card.owner}
							onCardClick={() => props.handleCardClick(card.link, card.name)}
							onDeleteClick={() => props.handleDeleteClick()}
							onLikeClick={(card) => props.onLikeClick(card)}
						/>
                        ))}
                    
                    </ul>

                </section>

            </main>
    )
}

export default Main;