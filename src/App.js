import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="page__container">

            <header class="header">

                <div class="logo"></div>

            </header>

            <main class="content">

                <section class="profile">

                    <div class="profile__avatar">

                        <img class="profile__picture" alt="Profile picture" src="images/cousteau.jpg" /> 

                        <div class="profile__avatar-edit"></div>
                        
                    </div>

                    <div class="profile__info">

                        <h1 class="profile__title"></h1>

                        <p class="profile__subtitle"></p>

                        <button class="profile__edit"></button>
                    
                    </div>
                
                    <button class="profile__add-button"></button>
                
                </section>

                <section class="cards"></section>

            </main>

            <footer class="footer">

                <p class="footer__copyright">

                    © 2020 Around The U.S.

                </p>

            </footer>

            <div class="popup popup_type_edit-avatar">

                <div class="popup__container">

                    <form class="popup__form popup__form_type_edit-avatar">

                        <div class="popup__close"></div>

                        <h3 class="popup__heading">
                            Change profile picture
                        </h3>

                        <input id="avatar-image" type="text" name="avatar" placeholder="Profile picture" class="popup__input popup__input_type_avatar" required />

                        <span id="avatar-image-error" class="popup__error"></span>

                        <button type="submit" value="Save" class="popup__button popup__button_disabled">Save</button>

                    </form>

                </div>

            </div>

            <div class="popup popup_type_edit-profile">

                <div class="popup__container">

                    <form class="popup__form">

                        <div class="popup__close"></div>
    
                            <h3 class="popup__heading">
    
                                Edit profile
    
                            </h3>

                        <input id="profile-name" type="text" name="name" placeholder="Name" class="popup__input popup__input_type_name" required minlength="2" maxlength="40" />

                        <span id="profile-name-error" class="popup__error"></span>

                        <input id="profile-text" type="text" name="about" placeholder="About me" class="popup__input popup__input_type_bio" required minlength="2" maxlength="200" />

                        <span id="profile-text-error" class="popup__error"></span>

                        <button type="submit" value="Save" class="popup__button popup__button_disabled">Save</button>

                    </form>

                </div>

            </div>

            <div class="popup popup_type_add-card">

                <div class="popup__container">

                    <form class="popup__form">

                        <div class="popup__close"></div>
    
                            <h3 class="popup__heading">
    
                                New place
    
                            </h3>

                        <input id="card-title" type="text" name="name" placeholder="Title" class="popup__input popup__input_type_card-title" required minlength="2" maxlength="30" />

                        <span id="card-title-error" class="popup__error"></span>

                        <input id="card-url" type="url" name="link" placeholder="Image link" class="popup__input popup__input_type_url" required />

                        <span id="card-url-error" class="popup__error"></span>

                        <button type="submit" value="Create" class="popup__button popup__button_disabled">Create</button>

                    </form>

                </div>

            </div>

            <div class="popup popup_type_delete-card">

                <div class="popup__container">

                    <form class="popup__form popup__form_type_delete-card">

                        <div class="popup__close"></div>

                        <h3 class="popup__heading popup__heading_type_delete-card">
                            Are you sure?
                        </h3>

                        <button type="submit" value="Yes" class="popup__button popup__button_type_delete-card">Yes</button>

                    </form>

                </div>

            </div>
    
            <div class="popup popup_type_image">

                <div class="popup__container popup__container_mode_image">

                    <div class="popup__close popup__close_mode_image">

                    </div>

                    <figure class="popup__figure">

                        <img src="#" class="popup__image" alt="#" />

                        <figcaption class="popup__image-title"></figcaption>

                    </figure>    

                </div>

            </div>
        
        <template class="card-template">

            <div class="card">

                <button class="card__delete"></button>

                <div class="card__image" src="#" style="" alt="#"></div>
                
                <div class="card__description">

                    <h2 class="card__title"></h2>

                    <div class="card__heart-container">
                        <button class="card__heart"></button>
                        <p class="card__heart-score"></p>
                    </div>

                </div>

            </div>

        </template>
            
    </div>
  );
}

export default App;
