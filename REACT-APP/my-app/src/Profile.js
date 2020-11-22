import React from 'react';
import './Profile.css';
import PPDefault from './images/ProfilDefault.png';

const Profile = () => {
    return(
        <div>
            <div class='Title'>
                <h2>Your Profil</h2>
            </div>
            <div class='globalContainer'>
                <div class='Donnees'>
                    <fieldset>
                        <legend>Your Data</legend>
                        <div class="data">
                        <div class="sousData">
                            <label for="prenom">First Name:</label>
                            <output for="prenom" id="prenom">X</output>
                        </div>
                        <div class="sousData">
                            <label for="Nom">Last Name:</label>
                            <output for="Nom" id="Nom">X</output>
                        </div>
                        <div class="sousData">
                            <label for="email"> Email:</label>
                            <output for="email" id="email">X</output>
                        </div>
                        <button name="modif">Change your data</button>
                        </div>
                    </fieldset>
                </div>
                <div class='Langues'>
                    <fieldset>
                        <legend>Your langages</legend>
                    </fieldset>
                </div>
                <div class='Photo'>
                    <fieldset>
                        <legend>Your Picture</legend>
                        <div class="items">
                        <img src={PPDefault} alt="profilPictureDefault"></img>
                        <button name="modif">Change your picture</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export default Profile;