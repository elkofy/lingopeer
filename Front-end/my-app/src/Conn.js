import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase.js";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Conn.css';


 const Conn =()=>   {
  /*state = {
    title:Conn
  } 
handleSubmit = e => {
  e.preventDefault();

const data = {
  username :this.email,
  password:this.motdepasse,

};

Axios.post('http://localhost:4000/login',data , {withCredentials: true}).then(
  res => {
    localStorage.setItem('token',res.data.token);
    console.log(res);
  }
).catch(
  err=> {
    console.log(err);
  }
)

  console.log(data);
};
*//*
const handleLogin = useCallback(
  async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  },
  [history]
);

const { currentUser } = useContext(AuthContext);

if (currentUser) {
  return <Redirect to="/" />;
}*/
  
    return(
       
      <div>
          
          <div class="Title">
              <h2>Connecte toi à LingoPeer!</h2>
          </div>
          <div class="Connect">
              <fieldset>
              <div class="card ">                          

              <div class="card-header">
                  <legend>Se Connecter</legend>
                  </div>
                      <form >
                          <div class="FirstInputs">
                          <div className ="form-group">
                          <div class="selects">
                          <div className ="form-group">

                          <label for="E-mail">Email :</label>
                           <input  type="text" placeholder="batou@gmail.com"  name="email" onChange={e => this.email =e.target.value} ></input><br></br> 
                          </div>
                          <div className ="form-group">
                          <label for="Motdepasse">Mot de passe :</label>
                  <input   type="password" placeholder="Mot de passe"  name="password" onChange={e => this.motdepasse =e.target.value}></input><br></br> 
                          </div>
                          </div>
                          <button type="conn" name="conn"  > Se Connecter</button>
                        
                          </div>
                          </div>
                      </form>
                      </div>
              </fieldset>
              <fieldset>
              <div class="card ">  
              <div class="card-header">
                  <legend>Continuer sans se Connecter</legend>
                  </div>
                  <div class="SecondInputs">
                      <form>
                          <label for="Nom">Nom :</label>
                          <input placeholder='Nom'/><br/>
                      </form>
                      <form>
                      <div class="selects">
                          <select class="Langue" name="Langue1">
                              <option selected disabled>Langue 1</option>
                              <option value="1">français</option>
                              <option value="2">Anglais</option>
                              <option value="3">Allemand</option>
                              <option value="4">Espagnol</option>
                              <option value="5">Italien</option>
                          </select>
                          <select class="Langue" name="Langue2">
                              <option selected disabled>Langue 2</option>
                              <option value="1">français</option>
                              <option value="2">Anglais</option>
                              <option value="3">Allemand</option>
                              <option value="4">Espagnol</option>
                              <option value="5">Italien</option>
                          </select>
                          </div>
                          <Link to="/apresConn">
                              <button type="conn" name="conn"> Se Connecter</button>
                          </Link>
                          </form>
                          </div>
                          </div>
              </fieldset>
              </div>
        </div>
  
      );
  }


  export default withRouter(Conn);
    /*const [loginUsername,setloginUsername]=useState("");
    const [loginPassword,setloginPassword]=useState("");
    const [data, setData] = useState(null);

    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
      };

    const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/user",
        }).then((res) => {
          setData(res.data);
          console.log(res.data);
        });
      };
      
      const click =() => {
        login();
        getUser();
        
      
      }*/
    
    