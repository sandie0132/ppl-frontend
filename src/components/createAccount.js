import React from "react";
import WelcomeContainer from './welcomeContainer'
import { connect } from 'react-redux'
import { userActions } from '../actions/userActions'
import { userService } from '../_services/user.service'

class CreateAccount extends React.Component {
    state = {
        user: {
            username: null,
            password: null,
            email: null,
            firstname: null,
            lastname: null
        },
        submitted: false,
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: { ...user, [id]: value }
        });



    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true })
        const { user } = this.state;
        if (user.firstname && user.lastname && user.username && user.password) {
            this.props.register(user);
            console.log(">>>this.props>>", this.props)
            // this.props.history.push("/login")
        }
    }
    render() {
        console.log(this.props);

        return (
            < div className="container" >
                <div className="content">
                    <WelcomeContainer />
                    <div className="content_rgt" >
                        <div className="register_sec">
                            <h1>Create An Account</h1>
                            <ul >
                                <form onSubmit={this.handleSubmit}>
                                    <li><span>Username</span><input type="text" placeholder="Enter your username" name="username" id="username" onChange={this.handleChange} required /></li>
                                    <li><span>Password</span><input type="text" placeholder="Enter your password" id="password" onChange={this.handleChange} required /></li>
                                    <li><span>Email</span><input type="text" placeholder="Enter your email" id="email" onChange={this.handleChange} required /></li>
                                    <li><span>First Name</span><input type="text" placeholder="Enter your first name" id="firstname" onChange={this.handleChange} required /></li>
                                    <li><span>Last Name</span><input type="text" placeholder="Enter your last name" id="lastname" onChange={this.handleChange} required /></li>
                                    <li><input type="checkbox" />I agree to Term &amp; Conditions</li>
                                    <li><input type="submit" defaultValue="Register" /></li>
                                    <li><span>{this.props.message}</span></li>
                                </form>
                            </ul>
                            <div className="addtnal_acnt">I already have an account.<a href="/login">Login My Account !</a></div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}


const mapStatesToProps = (state) => {
    const { message } = state;
    return { message };
}


const mapDispatchToProps = {

    register: userActions.register,

}


export default connect(mapStatesToProps, mapDispatchToProps)(CreateAccount);