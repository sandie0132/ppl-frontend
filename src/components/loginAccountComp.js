import React from 'react';
import { connect } from 'react-redux';

import WelcomeContainer from './welcomeContainer';
import { userActions } from '../actions/userActions';



class LoginComponent extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: { ...user, [id]: value }
        })
    }

    handleSubmit = (e) => {
        // console.log("i am in submit", this.props)
        e.preventDefault();
        const { user } = this.state;

        if (user.email && user.password) {
            console.log("i am in submit", user)

            this.props.login(user);
        }
    }



    render() {
        return (
            <div className="container">
                <div className="content">
                    <WelcomeContainer />
                    <div className="content_rgt">

                        <div className="login_sec">
                            <h1>Log In</h1>
                            <ul>
                                <form onSubmit={this.handleSubmit}>
                                    <li><span>Email-ID</span><input type="text" placeholder="Enter your email" onChange={this.handleChange} id='email' /></li>
                                    <li><span>Password</span><input type="text" placeholder="Enter your password" onChange={this.handleChange} id='password' /></li>
                                    <li><input type="checkbox" />Remember Me</li>
                                    <li><input type="submit" defaultValue="Log In" id='submit' /><a href="/forgot">Forgot Password</a></li>
                                </form>
                            </ul>
                            <div className="addtnal_acnt">I do not have any account yet.<a href="/register">Create My Account Now !</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    const { message } = state;
    return { message };
}


const mapDispatchToProps = {
    login: userActions.login
}



export default connect(mapStatesToProps, mapDispatchToProps)(LoginComponent);
