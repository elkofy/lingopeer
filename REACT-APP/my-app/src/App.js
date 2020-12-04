import './App.css';
import Header from './Header';
import Accueil from './Accueil';
import SignIn from './SignIn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header /> 
        <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/signIn" component={SignIn}/>
        </Switch>
    </Router>
      
    </div>

  );
}

export default App;
