import React from 'react';
import WelcomeComponent from './welcomeContainer'

class LoginComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="content_rgt">
                        <WelcomeComponent />
                        <div className="login_sec">
                            <h1>Log In</h1>
                            <ul>
                                <li><span>Email-ID</span><input type="text" placeholder="Enter your email" /></li>
                                <li><span>Password</span><input type="text" placeholder="Enter your password" /></li>
                                <li><input type="checkbox" />Remember Me</li>
                                <li><input type="submit" defaultValue="Log In" /><a href>Forgot Password</a></li>
                            </ul>
                            <div className="addtnal_acnt">I do not have any account yet.<a href>Create My Account Now !</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
