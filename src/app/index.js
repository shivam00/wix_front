var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

var Login = require('./login');
var AskTitle = require('./ask_title');
var AskAbout = require('./ask_about');
var ManageWebsite = require('./manage_webiste');
var Header = require('./header');
var HeaderManage = require('./header_manage');
var ManageScreen = require('./manage_screen');
var ManageSidebarEditPageSection = require('./manage_sidebar_eidt_page_section');
var ManageSidebarHome = require('./manage_sidebar_home');
var MyWebistes = require('./mywebsites')

import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';
//this.props.match.params.id
var App = createReactClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <div>
                <Route exact path={'/'} component={Homepage}/>
                <Route exact path={'/q1'} component={AskTitle}/>
                <Route exact path={'/q2'} component={AskAbout}/>
                <Route exact path={'/manage'} component={SuperManageWebsite}/>
                <Route exact path={'/manage/edit_section/:page_id'} component={SuperManageWebsite_EditSection}/>
                <Route exact path={'/mywebistes'} component={SuperMyWebistes}/>
                

                </div>
            </Router>
        );
    }
});

var SuperMyWebistes = createReactClass({
    render:function(){
        return(
            <div>
            <HeaderManage/>
            <MyWebistes/>
            </div>
        );

    }
});

var SuperManageWebsite = createReactClass({
    render:function(){
        return(
            <div>
            <HeaderManage/>
            <ManageSidebarHome/>
            <ManageScreen/>
            </div>
        );

    }
});

var SuperManageWebsite_EditSection = createReactClass({
    render:function(){
        return(
            <div>
            <HeaderManage/>
            <ManageSidebarEditPageSection/>
            <ManageScreen/>
            </div>
        );

    }
});

var Homepage = createReactClass({
    // getInitialState: function(){
    //     return{
    //         todos: ["wake up","bk","co"]
    //     };
    // },
render:function(){

    return(
      <div>
       <Header/>
      <Login />
          </div>
    );
    
}

});

ReactDom.render(<App />, document.getElementById('todo-wrapper'));