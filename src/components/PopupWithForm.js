import React from 'react';

function PopupWithForm(props) {
    return (
        <div 
            className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}
        >

            <div 
                className="popup__container"
            >

                <form 
                    className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit}
                >

                    <div 
                        className="popup__close" 
                        onClick={props.onClose}>
                    </div>

                    <h3 
                        className={`popup__heading popup__heading_type_${props.name}`}
                    >
                        {props.title}
                    </h3>

                    {props.children}
                    
                    <button 
                        type="submit" 
                        value="Save" 
                        className={`popup__button popup__button_type_${props.name}`}
                    >
                        {props.buttonText}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default PopupWithForm;