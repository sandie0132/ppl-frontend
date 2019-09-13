import React from 'react';
import './App.css';
import Register from "./components/register"
import LogInComponent from './components/login';
import TimelineComponent from './components/timeline'
import ForgotComponent from './components/forgot'
// import ResetComponent from './components/reset';
import IndexComponent from './components/index';
import { Router, Route, Link } from "react-router-dom";
import { history } from './_helpers/history'
// import { Provider } from "react-redux";
// import { createStore } from 'redux';
// import registerReducer from './reducers/registerReducer';



function App() {
  return (
    <>
      <Router history={history}>
        <div>
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={LogInComponent} />
          <Route exact path="/timeline" component={TimelineComponent} />
          <Route exact path="/index" component={IndexComponent} />
          <Route exact path="/forgot" component={ForgotComponent} />
        </div>
      </Router>




      {/* <Register /> */}
      {/* <LogInComponent /> */}
      {/* <ForgotComponent /> */}
      {/* <ResetComponent /> */}
      {/* <IndexComponent /> */}
    </>
  );
}

export default App;
