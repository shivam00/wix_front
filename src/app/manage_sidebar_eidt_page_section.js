var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//import Iframe from 'react-iframe'
import Iframe from 'react-simple-iframe'
var ManageSidebarEditPageSection = createReactClass({
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
                    <a href="#subPages1" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty" /> <span>Services</span> <i className="icon-submenu lnr lnr-chevron-left" /></a>
                    <div id="subPages1" className="collapse ">
                    <ul className="nav">
                        <li><a href="javascript:void">Section Name :</a><input type="text" className="form-control" placeholder="Section Name"/></li>
                        <li><a href="javascript:void">Tagline :</a> <input type="text" className="form-control" placeholder="Tagline"/></li>
                        <li><a href="javascript:void">Content 1</a></li>
                        <li> <a href="#subPages4" data-toggle="collapse" className="collapsed"><i className="fa fa-plus" /> <span>Add More Thread</span></a></li>
                        {/* <li><a href="javascript:void">Icon :</a> <input type="text" className="form-control" placeholder="Icon"/></li>
                        <li><a href="javascript:void">Heading : </a><input type="text" className="form-control" placeholder="Heading"/></li>
                        <li><a href="javascript:void">Content :</a> <textarea className="form-control" placeholder="textarea" rows={4} defaultValue={""} /></li> */}
                    </ul>
                    </div>
                </li>
                <li>
                    <a href="#subPages2" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty" /> <span>Portfolio</span> <i className="icon-submenu lnr lnr-chevron-left" /></a>
                    <div id="subPages2" className="collapse ">
                    <ul className="nav">
                        <li><a href="javascript:void">Section Name :</a><input type="text" className="form-control" placeholder="Section Name"/></li>
                        <li><a href="javascript:void">Tagline :</a> <input type="text" className="form-control" placeholder="Tagline"/></li>
                        <li><a href="javascript:void">Content 1</a></li>
                        <li> <a href="#subPages4" data-toggle="collapse" className="collapsed"><i className="fa fa-plus" /> <span>Add More Thread</span></a></li>
                        {/* <li><a href="javascript:void">Image :</a> <input type="file" className="form-control"/></li>
                        <li><a href="javascript:void">Heading : </a><input type="text" className="form-control" placeholder="Heading"/></li>
                        <li><a href="javascript:void">Content :</a> <textarea className="form-control" placeholder="textarea" rows={4} defaultValue={""} /></li> */}
                    
                    </ul>
                    </div>
                </li>
                <li>
                    <a href="#subPages3" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty" /> <span>About</span> <i className="icon-submenu lnr lnr-chevron-left" /></a>
                    <div id="subPages3" className="collapse ">
                    <ul className="nav">
                        <li><a href="javascript:void">Section Name :</a><input type="text" className="form-control" placeholder="Section Name"/></li>
                        <li><a href="javascript:void">Tagline :</a> <input type="text" className="form-control" placeholder="Tagline"/></li>
                        <li>
                        <a href="#subPages4" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty" /> <span>Thread 1</span></a>
                        <a href="#subPages4" data-toggle="collapse" className="collapsed"><i className="fa fa-plus" /> <span>Add More Thread</span></a>
                        </li>
                    </ul>
                    </div>
                </li>
                <li>
                    <a href="#subPages4" data-toggle="collapse" className="collapsed"><i className="lnr lnr-file-empty" /> <span>Team</span> <i className="icon-submenu lnr lnr-chevron-left" /></a>
                    <div id="subPages4" className="collapse ">
                    <ul className="nav">
                        <li><a href="javascript:void">Section Name :</a><input type="text" className="form-control" placeholder="Section Name"/></li>
                        <li><a href="javascript:void">Tagline :</a> <input type="text" className="form-control" placeholder="Tagline"/></li>
                        <li><a href="javascript:void">Content 1</a></li>
                       <li> <a href="#subPages4" data-toggle="collapse" className="collapsed"><i className="fa fa-plus" /> <span>Add More</span></a></li>
                    
                    </ul>
                    </div>
                </li>
              </ul>
          </nav>
        </div>
      </div>
      );
    }
  });

  module.exports = ManageSidebarEditPageSection;