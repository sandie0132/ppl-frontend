import React from "react";
import NavBar from './navbar';
import CreateAccount from './createAccount'
import HeadersComponent from "./header";
import FooterComponet from "./footer";


export default class Register extends React.Component {
    addUser = (newUser) => {
        console.log(newUser)

    }
    render() {
        return (
            <div>
                <title>Create An Account</title>
                <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
                <NavBar />
                <HeadersComponent />
                <CreateAccount addUser={this.addUser} />
                <FooterComponet />

            </div>

        );
    }

}