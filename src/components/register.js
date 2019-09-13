import React from "react";
import NavBar from './navbar';
import CreateAccount from './createAccount'
import HeadersComponent from "./header";
import FooterComponet from "./footer";
import axios from "axios";
import { userActions } from '../actions/userActions'

export default class Register extends React.Component {
    // addUser = (newUser) => {
    //     axios.post("http://localhost:8080/v1/auth/register", { ...newUser }).then((res) => {
    //         console.log(res)
    //         return <div><h1>Email registered</h1></div>


    //     })
    //         .catch((error) => {
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 // console.log(error.response.data);
    //                 // console.log(error.response.status);
    //                 // console.log(error.response.headers);
    //                 console.log("in response", error.response.data.stack)
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 // `error.request` is an instance of XMLHttpRequest in the 
    //                 // browser and an instance of
    //                 // http.ClientRequest in node.js
    //                 console.log("in req", error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.log('Error', error.message);
    //             }
    //             console.log(error.config);
    //         });

    // }
    render() {
        return (
            <div>
                <title>Create An Account</title>
                <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
                <NavBar />
                <HeadersComponent />
                <CreateAccount />
                <FooterComponet />

            </div>

        );
    }

}