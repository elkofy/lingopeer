import './App.css';
import Header from './Header';


import Accueil from './Accueil';
import SignIn from './SignIn';
import Connect from './Conn';
import Profile from './Profile';
import ApresConn from './apresConn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div>
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/apresConn" component={ApresConn}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/Conn" component={Connect}/>
          <Route path="/Profile" component={Profile}/>
        </Switch>
    </Router>

      
    </div>

  );
}

export default App;
