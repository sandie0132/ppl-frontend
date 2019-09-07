import React from "react";
import WelcomeContainer from './welcomeContainer'


class CreateAccount extends React.Component {
    state = {
        username: null,
        password: null,
        email: null,
        firstname: null,
        lastname: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        console.log(e.target.id)

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
    }
    render() {

        return (
            <div className="container" >
                <div className="content">
                    <WelcomeContainer />
                    <div className="content_rgt" >
                        <div className="register_sec">
                            <h1>Create An Account</h1>
                            <ul >
                                <form onSubmit={this.handleSubmit}>
                                    <li><span>Username</span><input type="text" placeholder="Enter your username" id="username" onChange={this.handleChange} /></li>
                                    <li><span>Password</span><input type="text" placeholder="Enter your password" id="password" onChange={this.handleChange} /></li>
                                    <li><span>Email</span><input type="text" placeholder="Enter your email" id="email" onChange={this.handleChange} /></li>
                                    <li><span>First Name</span><input type="text" placeholder="Enter your first name" id="firstname" onChange={this.handleChange} /></li>
                                    <li><span>Last Name</span><input type="text" placeholder="Enter your last name" id="lastname" onChange={this.handleChange} /></li>
                                    <li><input type="checkbox" />I agree to Term &amp; Conditions</li>
                                    <li><input type="submit" defaultValue="Register" /></li>
                                </form>
                            </ul>
                            <div className="addtnal_acnt">I already have an account.<a href>Login My Account !</a></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default CreateAccount;