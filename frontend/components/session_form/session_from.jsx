import React from 'react';
import {Link} from 'react-router-dom';



class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
       
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                  Welcome to Take Me Home!
                  <br/>
                    Please {this.props.formType} or {this.props.otherForm}
                  <div onClick={this.props.closeModal} >X</div>
                  <label>Username:
                    <input type="text"  value={this.state.username} onChange={this.handleInput("username")} />
                  </label>
                  <br></br>
                  <br/>
                  <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                  </label>
                  <br></br>
                  <br/>
                  <input type="submit" value={this.props.formType} />
                </form>

              
                
                <ul>
                    {this.props.errors.session.map(error => console.log(error))}
                </ul>

            </div>
        )

    }


}

export default SessionForm;