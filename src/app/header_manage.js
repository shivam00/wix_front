var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');
import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var HeaderManage = createReactClass({
    render:function(){
      return(
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-btn navbar-btn-right">
        <a className="btn btn-success update-pro" href="#" title="Visit the website" target="_blank"><i className="fa fa-rocket" /> <span>Visit the website</span></a>
      </div>
        <div className="brand">
          <h1 className="panel-title" id="logo-font">Wix</h1>
        </div>
        <div id="navbar-menu">
        <ul className="nav navbar-nav navbar-right">
        <li className="dropdown"><Link to="/mywebsites/q1"><a href="javascript:void"><span>New Website</span> <i class="icon-submenu fa fa-plus"></i></a></Link> </li>
        <li className="dropdown"> <a href="#"><span>Manage Websites</span></a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span>Add</span> <i className="icon-submenu lnr lnr-chevron-down" /></a>
          <ul className="dropdown-menu">
            <li><a data-toggle="modal" data-target="#pageModal" href="#">Page</a></li>
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
        <li className="dropdown"><Link to="/mywebsites/q1"><a href="javascript:void"><span>LogOut</span> <i class="icon-submenu fa fa-sign-out"></i></a></Link> </li>
      </ul>
        </div>
      </nav>

       <div className="modal fade" id="pageModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">×</button>
            <h4 className="modal-title">Give a name to your page</h4>
          </div>
          <div className="modal-body">
          <ul style={{listStyle: 'none', paddingLeft: 0}}>
            <li><a href="javascript:void">Heading : </a><input type="text" className="form-control" placeholder="Heading"/></li>
           
        </ul>
          </div>

          <div className="modal-footer">
          <button type="button" class="btn btn-success">Proceed</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="sectionModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">×</button>
            <h4 className="modal-title">Details of the section</h4>
          </div>
          <div className="modal-body">
          <ul style={{listStyle: 'none', paddingLeft: 0}}>
            <li><a href="javascript:void">Heading : </a><input type="text" className="form-control" placeholder="Heading"/></li>
            <li><a href="javascript:void">Content :</a> <textarea className="form-control" placeholder="textarea" rows={4} defaultValue={""} /></li>
            <li><a href="javascript:void">Image :</a> <input type="file" className="form-control"/></li>
        </ul>
          </div>

          <div className="modal-footer">
          <button type="button" class="btn btn-success">Proceed</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
      
      </div>
      );
    }
  });

  module.exports = HeaderManage;