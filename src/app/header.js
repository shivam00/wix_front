var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var Header = createReactClass({
    render:function(){
      return(
    
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="brand">
          <h1 className="panel-title" id="logo-font">Wix</h1>
        </div>
      </nav>
      
  
      );
    }
  });

  module.exports = Header;