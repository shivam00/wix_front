var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

var MyWebistes = require('./user_themes/index');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//import Iframe from 'react-iframe'
import Iframe from 'react-simple-iframe'
class ManageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IFRAME : this.props.Myframe
  };
     }    
    render(){
      return(
        <div className="main">
        {/* MAIN CONTENT */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" style={{width:'100%', height:'100vh'}}>
                    {this.state.IFRAME}
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  };

  module.exports = ManageScreen;