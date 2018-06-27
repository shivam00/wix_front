var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var Login = createReactClass({
    render:function(){
      return(
        <div id="login_wrapper">
              <div className="main-content">
                <div className="container-fluid">
                  {/* OVERVIEW */}
                  <div className="panel panel-headline">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                          <center>
                         <font size="5">Log In</font>
                          <br/>
                          New to Wix? <Link to="/register">Sign Up</Link>
                          </center>
                      </h3>
                    </div>
                    <div className="panel-body">
                                <div className="row">
                  <div className="col-md-2">
                  </div>
                    <div className="col-md-4"id="login_left">
                        <form onSubmit={this.handleSubmit}>
                        <input className="form-control input-lg" ref="email" placeholder="Email" type="text" />
                        <br/>
  
                        <input className="form-control input-lg" ref="password" placeholder="Password" type="Password" />
                        <br/>
                        <button type="submit" className="btn btn-primary btn-block">Log In</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                    Login With Social Media
                    <br/>
                    <a href="http://localhost:3000/auth/google"><img src="app/assets/img/login_google.png"/></a>
                    </div>
                    <div className="col-md-2">
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
  
      );
    },
    handleSubmit: function(e){
     e.preventDefault();
      this.props.loginRequest(this.refs.email.value, this.refs.password.value);
  }
  });

  module.exports = Login;