import React from 'react';
import './Profile.css';
import PPDefault from './images/ProfilDefault.png';

const Profile = () => {
    return(
        <div>
            <div class='Title'>
                <h2>Ton Profile</h2>
            </div>
            <div class='globalContainer'>
                <div class='Donnees'>
                    <fieldset>
                        <legend>Tes données</legend>
                        <div class="data">
                        <form>
                            <div class="sousData">
                                <label for="prenom">Prénom:</label>
                                <output for="prenom" id="prenom">X</output>
                            </div>
                            <div class="sousData">
                                <label for="Nom">Nom:</label>
                                <output for="Nom" id="Nom">X</output>
                            </div>
                            <div class="sousData">
                                <label for="email">Email:</label>
                                <output for="email" id="email">X</output>
                            </div>
                            <button name="modif">Changer tes données</button>
                        </form>
                        </div>
                    </fieldset>
                </div>
                <div class='Langues'>
                    <fieldset>
                        <legend>Tes langues</legend>
                    </fieldset>
                </div>
                <div class='Photo'>
                    <fieldset>
                        <legend>Ta photo</legend>
                        <div class="items">
                        <img src={PPDefault} alt="profilPictureDefault"></img>
                        <form>
                            <button name="modif">Changer ta photo</button>
                        </form>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export default Profile;