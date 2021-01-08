import './App.css';
import Header from './Header';
import Header2 from './Header2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Accueil from './components/Accueil';
import SignIn from './SignIn';
import Chatrooms from './Chatrooms';
import Connect from './Conn';
import Profile from './Profile';
import ApresConn from './apresConn';
import Room from './Room';
import Friends from './friends';
import ParamConv1 from './ParamConv';
import ParamConv2A from './ParamConvA';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {

  return (
    <div>
    <Router>
        <Header2 />
        <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/apresConn" component={ApresConn}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/Conn" component={Connect}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Friends" component={Friends}/>
          <Route path="/Room" component={Room}/>
          <Route path="/ParamConv" component={ParamConv1}/>
          <Route path="/ParamConvA" component={ParamConv2A}/>
          <Route path="/Chatrooms" component={Chatrooms}/>
        </Switch>
    </Router>

      
    </div>

  );
}

export default App;
