import React from 'react';
import NavBar from './navbar';
import LoginComponent from './loginAccountComp'
import HeadersComponent from './header';
import FooterComponet from './footer';



class LogInComponent extends React.Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>Login Account</title>
                <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
                <NavBar />
                <HeadersComponent />
                <LoginComponent />
                <FooterComponet />

            </div>
        )
    }
}


export default LogInComponent;