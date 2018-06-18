var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var HeaderManage = createReactClass({
    render:function(){
      return(
    
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="brand">
          <h1 className="panel-title" id="logo-font">Wix</h1>
        </div>
        <div id="navbar-menu">
        <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span>Add</span> <i className="icon-submenu lnr lnr-chevron-down" /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Page</a></li>
            <li><a href="#">Section to a page</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span>Manage/Edit Sections</span> <i className="icon-submenu lnr lnr-chevron-down" /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
          </ul>
        </li>
      </ul>
        </div>
      </nav>
      
  
      );
    }
  });

  module.exports = HeaderManage;