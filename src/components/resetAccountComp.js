import React from 'react'
import WelcomeContainer from './welcomeContainer';
import ResetComponent from './reset';



class ResetAccountComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="content_rgt">
                        <div className="register_sec">
                            <h1>Reset Password</h1>
                            <ul>
                                <li><span>Enter New Password</span><input type="text" placeholder="Enter your new password" /></li>
                                <li><span>Confirm Password</span><input type="text" placeholder="Enter your password again" /></li>
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

export default ResetAccountComponent;