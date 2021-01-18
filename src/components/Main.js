import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

	const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">

                <section className="profile">

                    <div className="profile__avatar">

                        <img className="profile__picture" alt="Profile picture" src={currentUser.avatar} /> 

                        <div className="profile__avatar-edit" onClick={props.handleEditAvatarClick}></div>
                        
                    </div>

                    <div className="profile__info">

                        <h1 className="profile__title">{currentUser.name}</h1>

                        <p className="profile__subtitle">{currentUser.about}</p>

                        <button className="profile__edit" onClick={props.handleEditProfileClick}></button>
                    
                    </div>
                
                    <button className="profile__add-button" onClick={props.handleAddPlaceClick}></button>
                
                </section>

                <section className="cards">

                    <ul className="cards__list">

                        {props.cards.map((card, i) => (
                            <Card
							id={card._id}
							key={i}
							src={card.link}
							title={card.name}
							likes={card.likes}
							owner={card.owner}
							handleCardClick={() => props.handleCardClick(card.link, card.name)}
							handleDeleteClick={props.handleDeleteClick}
							handleLikeClick={() => props.handleLikeClick(card)}
						/>
                        ))}
                    
                    </ul>

                </section>

            </main>
    )
}

export default Main;