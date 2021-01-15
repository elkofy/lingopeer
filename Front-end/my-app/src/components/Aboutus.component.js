import React, { Component } from "react";

import Louis from '../images/photo_Louis.jfif';
import Bapt from '../images/photo_Bapt.jpg';
import Alec from '../images/photo_Alec.jpg';
import Nass from '../images/photo_Nass.png';
import Driss from '../images/photo_driss.jpg';
import Saad from '../images/photo_saad.png';

import './Aboutus.css';

export default class Aboutus extends Component{

    render(){
        return(
            <div>
            <div class="introb">
                <h1>Qui sommes nous ?</h1>
                <p>Nous sommes une équipe de 6 étudiants en deuxième année de DUT informatique à Grenoble, ce projet a pour but
                de permettre aux utilisateurs de maintenir ou renforcer leur niveau en langues. Avec différentes conversations
                écrites mais surtout audios, ainsi que des mini jeux pour faciliter le dialogue.
                Nous avons pris deux mois à le mettre en place, mais le projet continue de se développer donc restez connectés :) . 
                </p>
                <h2>Voici les membres de l'équipe :</h2>
            </div>
            <div class="englobe">
            <div class="membresph">
                <div class="Louis">
                    <img src={Louis} className="Louis" alt="photoLouis" />
                    <p>Louis - Développer back-end</p>
                </div>
                <div class="Bapt">
                    <img src={Bapt} className="Bapt" alt="photoBapt" />
                    <p>Baptiste - Développer front-end</p>
                </div>
                <div class="Alec">
                    <img src={Alec} className="Alec" alt="photoAlec" />
                    <p>Alec - Développer front-end</p>
                </div>
            </div>
            <div class="membresph">
                <div class="Nass">
                    <img src={Nass} className="Nass" alt="photoNass" />
                    <p>Nassim - Chef de projet</p>
                </div>
                <div class="Driss">
                    <img src={Driss} className="Driss" alt="photoDriss" />
                    <p>Driss - Développer back-end</p>
                </div>
                <div class="Saad">
                    <img src={Saad} className="Saad" alt="photoSaad" />
                    <p>Baptiste - Développer back-end</p>
                </div>
            </div>

            </div>
            <div class="finb">
                <p>Merci à vous d'utiliser notre application !</p>
            </div>
            </div>
        );
    }
}

