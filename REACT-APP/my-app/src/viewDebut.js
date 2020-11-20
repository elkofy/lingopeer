import img from './images/lingoPeerLogo.png';
import img1 from './images/imgl1.png';
import img2 from './images/imgl.jpg';
import img3 from './images/imgl2.jpg';
import './viewDebut.css';

const ViewDdebut = () => {
  return (
    <div className="ViewDdebut">
      <header className="App-header">
        <div className="inner_header">
          <div className="logo_container">
            <img src={img} alt=""/>
            <h1>Lingo<span>Peer</span></h1>
          </div>
        </div>
      </header>
      <body>
    <p>With lingo peer communicate better in an other language than your peers</p>
    <div id="slideshow">
        <ul id="sContent">
            <li><img src={img1} alt="Image 1" /></li>
            <li><img src={img2} alt="Image 2" /></li>
            <li><img src={img3} alt="Image 3" /></li> 
        </ul>
    </div>
    <div id="connexion">
        <button class="seconect" type="button">
            Se connecter
        </button>
    </div>
    <div id="creercompte">
        <a href="view.suivanteparencorecréer">Céer un compte</a>
    </div>
  </body>
    </div>
  );
}

export default ViewDdebut;