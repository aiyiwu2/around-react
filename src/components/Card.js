import React from 'react';

function Card(props) {
    function handleCardClick() {
		props.onCardClick(props.card);
	}

    function onLikeClick() {
        props.onLikeClick(props.card);
      }

    function handleDeleteClick() {
        props.handleDeleteClick(props.card);
      }

    return (
    <li className="card">

        <button className="card__delete" onClick={handleDeleteClick} src="../images/cardDelete.svg"></button>

        <img className="card__image" src={props.src} alt={props.title} onClick={handleCardClick} />
            
        <div className="card__description">

            <h2 className="card__title">{props.title}</h2>

            <div className="card__heart-container">
                <button className="card__heart" onClick={onLikeClick}></button>
                <p className="card__heart-score">{props.likes}</p>
            </div>

        </div>

    </li>
            )
}

export default Card;