


var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//import Iframe from 'react-iframe'
import Iframe from 'react-simple-iframe'
var MyWebistes = createReactClass({
    render:function(){
      return(
    
       
        
          <div className="container-fluid" style={{marginTop:'100px'}}>
            <div className="row">
              <div className="col-md-12" style={{width:'100%', height:'100vh'}}>
              <div className="web_container col-md-4">
        <img src="/app/assets/img/profile-bg.png" className="web_image" />
        <div className="web_middle">
          <a href="#"><div className="web_text">Edit/Manage</div></a>
        </div>
        <center><font sixe="7">Websites name</font></center>
      </div>


         <div className="web_container col-md-4">
        <img src="/app/assets/img/profile-bg.png" className="web_image" />
        <div className="web_middle">
          <a href="#"><div className="web_text">Edit/Manage</div></a>
        </div>
        <center><font sixe="7">Websites name</font></center>
      </div>
              </div>
            </div>
          </div>
       
      
      );
    }
  });

  module.exports = MyWebistes;