var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

//var TodoItem = require('./todoitem');

//require('bootstrap/less/bootstrap.less');

//Loading Style Sheet
require('./assets/vendor/bootstrap/css/bootstrap.min.css');
require('./assets/vendor/font-awesome/css/font-awesome.min.css');
require('./assets/vendor/linearicons/style.css');
//require('./assets/vendor/chartist/css/chartist-custom.css');
require('./assets/css/main.css');
require('./assets/css/demo.css');
require('./assets/vendor/bootstrap/css/bootstrap.min.css');
//End of StyleSheet



//Loading JS
require('./assets/vendor/jquery/jquery.min.js');
require('./assets/vendor/bootstrap/js/bootstrap.min.js');
require('./assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js');
//require('./assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js');
//require('./assets/vendor/chartist/js/chartist.min.js');
require('./assets/scripts/klorofil-common.js');



import {Route, BrowserRouter as Router, browserHistory, Link } from 'react-router-dom';

var App = createReactClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <div>
                <Route exact path={'/'} component={Homepage}/>
                </div>
            </Router>
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
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="brand">
          <h1 className="panel-title" id="logo-font">Wix</h1>
        </div>
      </nav>
            <div className="main" id="login_wrapper">
            <div className="main-content">
              <div className="container-fluid">
                {/* OVERVIEW */}
                <div className="panel panel-headline">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                        <center>
                       <font size="6">Log In</font>
                        <br/>
                        New to Wix? <Link to="/register">Sign Up</Link>
                        </center>
                    </h3>
                  </div>
                  <div className="panel-body">
							  <div className="row">
                  <div className="col-md-4">

                      <input className="form-control input-lg" placeholder="Email" type="text" />
                      <br/>

                      <input className="form-control input-lg" placeholder="Password" type="Password" />
                      <br/>
                      <button type="button" className="btn btn-warning btn-block">Log In</button>
                  </div>
                  <div className="col-md-4">
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    );
    
}

});

ReactDom.render(<App />, document.getElementById('todo-wrapper'));