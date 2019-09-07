import React from 'react'
import NavBar from './navbar';
import HeadersComponent from './header';
import FooterComponet from './footer';
import ResetAccountComponent from './resetAccountComp'



class ResetComponent extends React.Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>Reset Password</title>
                <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
                <NavBar />
                <HeadersComponent />
                <ResetAccountComponent />
                <div className="clear" />
                <FooterComponet />
            </div>
        );
    }
};

export default ResetComponent;