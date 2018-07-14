var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var AskAbout = createReactClass({
    render:function(){
      return(
    
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle">
          <br/>
          <br/>
            <div className="auth-box lockscreen clearfix">
              <div className="content">
                <div className="user text-center">
                <font size="5"><b>Describe Your Website</b></font>
                <br/>
                <center>
                    <img src={require("./assets/img/ask_about.png")}/>
                    </center>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group">
                  <textarea className="form-control" ref="about" placeholder="About the webiste" rows={4} defaultValue={""} />
                    <span className="input-group-btn"><button type="submit" className="btn btn-primary"><i className="fa fa-arrow-right" /></button></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    },
    handleSubmit:function(e){
      e.preventDefault();
      this.props.add_about(this.refs.about.value);
    }
  });

  module.exports = AskAbout;