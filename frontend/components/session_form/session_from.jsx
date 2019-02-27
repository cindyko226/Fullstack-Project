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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
        this.props.processForm(user)
        .then(this.props.closeModal);
        // this.props.history.push('/spots');
       
    }

    handleDemoLogin(e){
        e.preventDefault();
        const user = Object.assign({}, {username: 'Mocha', password: "password"});
        this.props.processForm(user)
        .then(this.props.closeModal);
    }

    render(){
        let display = (this.props.formType === "Log In") ? (
            "Don’t have an account?"
        ):(
            "Already have an Take Me Home account ?"
        );
        
        // let demo = (this.props.formType === "Log In") ? (
        //     <input type="text" />
        // );
        

        return(
            <div>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box" >
                    <h2 className="modal-logo" >Welcome to Take Me Home!</h2>
                    <h3 className="modal-title" >{this.props.formType}</h3>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                      <div className="login-form">
                        <br/>
                        <label className="modal-word" >Username: 
                            <input type="text"  
                                   value={this.state.username} 
                                   onChange={this.handleInput("username")} 
                                   className="login-input"
                            />
                        </label>
                        <br/>
                        <label className="modal-word" >Password: 
                            <input type="password" 
                                   value={this.state.password} 
                                   onChange={this.handleInput("password")}
                                   className="login-input"
                                   />
                        </label>
                        <br/>
                        <input type="submit" 
                               value={this.props.formType} 
                               className="session-submit"
                        />
                        <br/>
                        <input type="submit"
                               value="Demo Login"
                               onClick={this.handleDemoLogin}
                               className="session-submit"
                        />
                      </div >
                        <div className="modal-footer">
                          <div className="footer-word"> {display} </div>
                          <div>  {this.props.otherForm} </div>
                        </div>
                    </form>
                </div>
              
                
                <ul>
                    {this.props.errors.session.map(error => console.log(error))}
                </ul>

            </div>
        )

    }


}

export default SessionForm;