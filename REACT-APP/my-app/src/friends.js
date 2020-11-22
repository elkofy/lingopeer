import React from 'react';
import './friends.css';

const Friends = () =>{
    return(
        <div>
        <div class="title">
            <h3>Your Friends</h3>
        </div>
        <div class="page">
            <div class="list">
            <ul>
                <li><a href="#">friend 1</a></li>
                <li><a href="#">friend 2</a></li>
                <li><a href="#">friend 3</a></li>
                <li><a href="#">friend 4</a></li>
                <li><a href="#">friend 5</a></li>
                <li><a href="#">friend 6</a></li>
            </ul>
            </div>
            <div class="demande">
            <fieldset>
                <legend>Ajouter un ami</legend>
                <label for="Email">Email :</label>
                <input type="text" id="Email" name="Email"/><br/>           
                <textarea name="comment" form="usrform">Enter text here...</textarea>
                <button type="conn" name="conn"> Envoyer la demande</button>
            </fieldset>
            </div>
        </div>
        </div>

    );
}

export default Friends;