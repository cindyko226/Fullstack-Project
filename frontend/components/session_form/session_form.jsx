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
        this.changeHistory = this.changeHistory.bind(this);
    }

    // componentDidMount(){
    //     this.props.clearErrors();
    // }

    // componentDidUpdate(){
    //     this.props.clearErrors();
    // }

    componentWillUnmount() {
        this.props.clearErrors();
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
        .then(() => {
            this.props.closeModal();
            this.props.history.push('/spots');
        });
       
    }
    
    changeHistory(){
        // debugger
        if (this.props.location.pathname === "/") {
           return( this.props.history.push('/spots') );
        };
    }

   
    

    demo(user) {
        const intervalSpeed = 100;
        const { username, password } = user;
        const demoUsernameTime = username.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 3;
        const totalDemoTime = demoUsernameTime + demoPasswordTime + buffer;
        console.log(this.props.history);
        this.demoUsername(username, intervalSpeed);
        setTimeout(() => this.demoPassword(password, intervalSpeed), demoUsernameTime);
        setTimeout(() => this.props.processForm(user)
        .then(() => {
                this.props.closeModal();
                this.changeHistory()
                // this.props.history.push('/spots');
            }), totalDemoTime);
        
    }

    demoUsername(username, intervalSpeed) {
        let i = 0;

        setInterval(() => {
            if (i <= username.length) {
                this.setState({ username: username.slice(0, i) })
                i++
            } else {
                clearInterval()
            }
        }, intervalSpeed);

    }

    demoPassword(password, intervalSpeed) {
        let j = 0;

        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) })
                j++;
            } else {
                clearInterval()
            }
        }, intervalSpeed);

    }




    handleDemoLogin(e){
        e.preventDefault();
        const user = Object.assign({}, {username: 'Mocha', password: "password"});
        this.demo(user);
    
    }
        


    // handleDemoLogin(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, { username: 'Mocha', password: "password" });

    //     this.props.processForm(user)
    //         .then(() => {
    //             this.props.closeModal();
    //             this.props.history.push('/spots');
    //         });

    // }
    
   renderUsernameErrors(){
       if (this.props.formType === "Sign Up"){
           if (this.props.errors.session.length === 1 && this.props.errors.session[0].includes("Username")) {
               return (this.props.errors.session[0]); 
          } 
           if (this.props.errors.session.length > 1) {
               return (this.props.errors.session[0]);
          }
       }
   }

   renderPasswordErrors(){
       if (this.props.formType === "Log In") {
           return (this.props.errors.session[1]);
       } 

       if (this.props.formType === "Sign Up") {
           if (this.props.errors.session.length === 1 && this.props.errors.session[0].includes("Password")) {
               return (this.props.errors.session[0]);
           }
           if (this.props.errors.session.length > 1) {
               return (this.props.errors.session[1]);
           }
       } 
   }
   


    render(){
        let display = (this.props.formType === "Log In") ? (
            "Don’t have an account?"
        ):(
            "Already have an Take Me Home account ?"
        );

        let classname = (this.props.formType === "Log In") ? (
            'session-submit'
        ):(
            'session-submit-hide'
        );
        

        return(
            <div>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box" >
                    <h2 className="modal-logo" >Welcome to Take Me Home!</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                      <div className="login-form">
                            

                        <br/>
                           <div className="input-form-icon" >

                            <input type="text"  
                                   value={this.state.username} 
                                   onChange={this.handleInput("username")} 
                                   className="login-input"
                                   placeholder="Username:"
                                   required
                            />
                            <i className="fas fa-user"></i>
                           </div>
                            <div className="errors">
                            {this.renderUsernameErrors()} 
                            </div>
                            
                        <br/>
                            <div className="input-form-icon">

                            <input type="password" 
                                   value={this.state.password} 
                                   onChange={this.handleInput("password")}
                                   className="login-input"
                                   placeholder="Create a password:"
                                   required
                                   />
                            <i className="fas fa-lock"></i>
                            </div>
                            <div className="errors">
                            {this.renderPasswordErrors()} 
                            </div>
    
                        <br/>
                        <input type="submit" 
                               value={this.props.formType} 
                               className="session-submit"
                        />
                        <br/>
                        <input type="submit"
                               value="Demo Login"
                               onClick={this.handleDemoLogin}
                               className={classname}
                        />
                      </div >
                        <div className="modal-footer">
                          <div className="footer-word"> {display} </div>
                          <div>  {this.props.otherForm} </div>
                        </div>

                    </form>
                </div>
              
                
                

            </div>
        )

    }


}

export default SessionForm;