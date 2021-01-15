import React from 'react';
import UserService from "../services/user.service";

export default class  Chatrooms extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }
    
      componentDidMount() {
        UserService.getUserBoard().then(
          response => {
            this.setState({
              content: response.data
            });
          },
          error => {
            this.setState({
              content:
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString()
            });
          }
        );
      }
      render() {
        if (this.state.content=="User Content."){
    return(
        
    
<div>
<div id="message-container"></div>
<form id="message-input"></form>
</div>
    );
}return (
    <div>
      <header className="jumbotron">
        <h3>Connectez-vous pour acceder à ce contenu !</h3>
      </header>
      
    </div>
    
  )
}
}



