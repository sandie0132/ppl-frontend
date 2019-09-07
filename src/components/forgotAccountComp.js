import React from 'react'
import WelcomeContainer from './welcomeContainer';





class ForgotAccountComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="content_rgt">
                        <div className="register_sec">
                            <h1>Forgot Password</h1>
                            <ul>
                                <li><span>Enter E-mail ID</span><input type="text" placeholder="User@gmail.com" /></li>
                                <li><input type="submit" defaultValue="Submit" /></li>
                            </ul>
                        </div>
                    </div>
                    <WelcomeContainer />
                </div>
            </div>
        )
    }
}

export default ForgotAccountComponent;