var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//import Iframe from 'react-iframe'
import Iframe from 'react-simple-iframe'
var ManageSidebarHome = createReactClass({
    render:function(){
      return(
        <div id="sidebar-nav" className="sidebar">
        <div className="sidebar-scroll" id="manage_sidebar">
          <nav>
              <br/>
            <ul className="nav">
                <li>
                   <a><span><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="6">Welcome</font></b></span></a>
                </li>
                <li>
                    <a><i class="lnr lnr-home"></i> <span>Website Title</span></a>
                </li>
                <li>
                <input type="text" className="form-control" placeholder="Website Title" />
                </li>
                <li>
                    <a><i class="fa fa-paper-plane-o"></i> <span>Sub Title</span></a>
                </li>
                <li>
                <input type="text" className="form-control" placeholder="Sub Title" />
                </li>
                <li>
                    <a><i class="lnr lnr-inbox"></i> <span>Button Text</span></a>
                </li>
                <li>
                <input type="text" className="form-control" placeholder="Button Text" />
                </li>
                <li>
                    <a><i class="lnr lnr-rocket"></i> <span>Button Link</span></a>
                </li>
                <li>
                <input type="text" className="form-control" placeholder="Button Link" />
                </li>
                <li>
                <a><button type="button" class="btn btn-success">Update And Save</button></a>
                </li>
              </ul>
          </nav>
        </div>
      </div>
      );
    }
  });

  module.exports = ManageSidebarHome;