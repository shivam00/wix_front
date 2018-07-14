var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var AskTitle = createReactClass({
    render:function(){
      return(
    
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle">
          <br/>
          <br/>
            <div className="auth-box lockscreen clearfix">
              <div className="content">
                <div className="user text-center">
                <font size="5"><b>Give your Site a name</b></font>
                <br/>
                <center>
                    <img src={require("./assets/img/ask_title.png")} height="100" width="400"/>
                    </center>
                  <h2 className="name">Title</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group">
                    <input type="text" ref="title" className="form-control" placeholder="Website name" />
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
      this.props.add_title(this.refs.title.value);
    }
  });

  module.exports = AskTitle;