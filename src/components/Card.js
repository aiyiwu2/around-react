import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUserContext = React.useContext(CurrentUserContext);

	// Checking if you are the owner of the current card
  const isOwn = props.owner._id === currentUserContext._id;
  console.log(props.owner._id)
  console.log(currentUserContext._id)
  console.log(isOwn)

	// Creating a variable which you'll then set in `className` for the delete button
	const cardDeleteButtonClassName = `card__delete ${
		isOwn ? "card__delete_mode_visible" : "card__delete_mode_hidden"
	}`;

	// Check if the card was liked by the current user
	//const isLiked = props.likes.some((i) => i._id === currentUserContext._id);

	// Create a variable which you then set in `className` for the like button
	//const cardLikeButtonClassName = `card__heart ${isLiked ? "card__heart_mode_like" : "card__heart"}`;

    function handleCardClick() {
		props.handleCardClick(props.card);
	}

    function handleLikeClick() {
        props.handleLikeClick(props.card);
      }

    function handleDeleteClick() {
        props.handleDeleteClick(props.card);
      }

    return (
    <li className="card">

        <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} src="../images/cardDelete.svg" /*style={{visibility: cardRemoveButtonClassName}}*/></button>

        <img className="card__image" src={props.src} alt={props.title} onClick={handleCardClick} />
            
        <div className="card__description">

            <h2 className="card__title">{props.title}</h2>

            <div className="card__heart-container">
                <button className="card__heart" onClick={handleLikeClick}></button>
                <p className="card__heart-score">{props.likes}</p>
            </div>

        </div>

    </li>
            )
}

export default Card;