import React from 'react';

function ImagePopup(props) {
    return (
        <div 
            className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ""}`}
            onClick={props.onClose}
        >

            <div 
                className="popup__container popup__container_mode_image"
            >

            <div 
                className="popup__close popup__close_mode_image"
                onClick={props.onClose}
            ></div>

            <figure 
                className="popup__figure"
            >

                <img 
                    src={props.link} 
                    className="popup__image" 
                    alt={props.title} 
                />

                <figcaption 
                    className="popup__image-title">
                        {props.title}
                </figcaption>

            </figure>    

            </div>

        </div>
    )
}

export default ImagePopup;