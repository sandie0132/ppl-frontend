import React from 'react'
import ForgotPop from './forgotPop'
import NavBar from './navbar';
import HeadersComponent from './header';
import FooterComponet from './footer';
import ForgotAccountComponent from './forgotAccountComp';






class ForgotComponent extends React.Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>Forgot Password</title>
                <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
                <ForgotPop />
                <NavBar />
                <HeadersComponent />
                <div className="clear" />
                <ForgotAccountComponent />
                <FooterComponet />
            </div>
        );
    }
};


export default ForgotComponent;