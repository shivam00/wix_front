var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

var Login = require('./login');
var AskTitle = require('./ask_title');
var AskAbout = require('./ask_about');
var ManageWebsite = require('./manage_webiste');
var Header = require('./header');


import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var App = createReactClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <div>
                <Route exact path={'/'} component={Homepage}/>
                <Route exact path={'/q1'} component={AskTitle}/>
                <Route exact path={'/q2'} component={AskAbout}/>
                <Route exact path={'/manage'} component={SuperManageWebsite}/>

                </div>
            </Router>
        );
    }
});

var SuperManageWebsite = createReactClass({
    render:function(){
        return(
            <div>
            <Header/>
            <ManageWebsite/>
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