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
  
                        <input className="form-control input-lg" placeholder="Email" type="text" />
                        <br/>
  
                        <input className="form-control input-lg" placeholder="Password" type="Password" />
                        <br/>
                        <button type="button" className="btn btn-primary btn-block">Log In</button>
                    </div>
                    <div className="col-md-4">
                    Login With Social Media
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
    }
  });

  module.exports = Login;