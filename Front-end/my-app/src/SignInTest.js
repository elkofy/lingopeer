import React, { Component } from 'react';
import Axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUsreEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            email:''
        }
    }

    onChangeUserEmail(e){
        this.setState({name: e.target.value})
    }

    onChangeUserEmail(e){
        this.setState({email: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const UserObject = {
            name: this.state.name,
            email: this.state.email
        };

        Axios.post('http://localhost/4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
        
            this.setState({name:'', email:''}) 
    }

    render(){
        return(
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>User Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn block" />
                    </div>
                </form>
            </div>
        )
    }
}