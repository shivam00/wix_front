


var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//import Iframe from 'react-iframe'
import Iframe from 'react-simple-iframe'
var ManageScreen = createReactClass({
    render:function(){
      return(
        <div className="main">
        {/* MAIN CONTENT */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" style={{width:'100%', height:'100vh'}}>
              <Iframe src='/app/user_themes/index.html' style={{border: 'none', width: '100%', height: '100%'}}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  });

  module.exports = ManageScreen;