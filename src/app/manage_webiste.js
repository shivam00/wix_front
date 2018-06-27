var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//import Iframe from 'react-iframe'
import Iframe from 'react-simple-iframe'
var ManageWebsite = createReactClass({
    iframe: function () {
        return {
          __html:  <iframe src={require('./user_themes/index.html')} style={{border: '2px solid red'}} />
        }
      },
    render:function(){
      return(
    <div>
        

  
      
  </div>
      );
    }
  });

  module.exports = ManageWebsite;