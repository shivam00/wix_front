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
var MyWebistes = require('./mywebsites');

//const BaseUrl = "http://localhost:1234";

import {Route, BrowserRouter as Router, browserHistory, Link, Redirect } from 'react-router-dom';
import Iframe from 'react-simple-iframe'
import FormData from 'form-data'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.withCredentials =  true;
axios.defaults.headers =  {
    'Access-Control-Allow-Origin': 'http://localhost:1234',
    'Content-Type': 'application/json',
  };
//this.props.match.params.id
var App = createReactClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <div>
                <Route exact path={'/'} component={Homepage}/>
                <Route exact path={'/mywebsites'} component={SuperMyWebistes}/>
                <Route exact path={'/mywebsites/q1'} component={C_AskTitle}/>
                <Route exact path={'/mywebsites/q2'} component={C_AskAbout}/>
                <Route exact path={'/manage'} component={SuperManageWebsite}/>
                <Route exact path={'/manage/edit_section'} component={SuperManageWebsite_EditSection}/>

                </div>
            </Router>
        );
    }
});

var C_AskAbout = createReactClass({

    render:function(){
       return(
        <AskAbout add_about={this.add_about}/>
       ); 
    },
    add_about:function(about){
        axios.post('/auth/add_about', {
            about: about
          })
          .then(function (response) {
            console.log(response.data);
            if(response.data == true){
                //window.location = BaseUrl+"/mywebsites";
                this.props.history.push('/mywebsites/');
            }else{
                swal("Error", "Some Error Occured Please try Again", "error");
            }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });

    }
});


var C_AskTitle = createReactClass({
    render:function(){
        return(
            <AskTitle add_title = {this.add_title}/>
        );
    },
    add_title:function(title){

        axios.post('/auth/add_title', {
            title: title
          })
          .then(function (response) {
            console.log(response.data);
            if(response.data == true){
                //window.location = BaseUrl+"/mywebsites";
                this.props.history.push('/mywebsites/q2');
            }else{
                swal("Error", "Some Error Occured Please try Again", "error");
            }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });

    }
});
class SuperMyWebistes extends React.Component {
//var SuperMyWebistes = createReactClass({
   
    constructor(props){
        super(props);
        this.state = {
            websites : []
        };
      }
    componentWillMount() {

        axios.get('/auth/mywebsites')
        .then(function (response) {
          this.setState({
            websites: response
          });
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
    render(){
        var websites = this.state.websites;
        return(
            <div>
            <HeaderManage/>
            <MyWebistes websites={websites}/>
            </div>
        );

    }
};
class SuperManageWebsite extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            Myframe : <Iframe src='/app/user_themes/index.html' style={{border: 'none', width: '100%', height: '100%'}}/>

 };
 }
    render(){
        return(
            <div>
            <HeaderManage/>
            <ManageSidebarHome update_details = {this.update_details}/>
            <ManageScreen Myframe = {this.state.Myframe}/>
            </div>
        );

    }
    update_details(title, subtTitle, buttonText, ButtonLink){


        axios.post('/auth/update_initials', {
            title: title,
            subTitle:subtTitle,
            buttonText:buttonText,
            buttonLink:ButtonLink

          })
          .then(function (response) {
            console.log(response.data);
            if(response.data == true){
                //window.location = BaseUrl+"/mywebsites";
                swal("Success", "Details Updated and saved", "success");
            }else{
                swal("Error", "Some Error Occured Please try Again", "error");
            }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });


        //ManageScreen.forceUpdate();
        this.setState = {
            Myframe : <Iframe src='/app/user_themes/index.html' style={{border: 'none', width: '100%', height: '100%'}}/>
        };
    }
};
class SuperManageWebsite_EditSection extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            Myframe : <Iframe src='/app/user_themes/index.html' style={{border: 'none', width: '100%', height: '100%'}}/>

 };

}
    render(){
        return(
            <div>
            <HeaderManage/>
            <ManageSidebarEditPageSection add_team={this.add_team} add_about2={this.add_about2} add_services={this.add_services} add_portfolio={this.add_portfolio}/>
            <ManageScreen Myframe = {this.state.Myframe}/>
            </div>
        );

    }
    add_team(image, heading, content){
        let data = new FormData();
        data.append('file', image, image.fileName);
        axios.post('/auth/upload', data, {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
          })
            .then((response) => {
              //handle success
              axios.post('/auth/add_team', {
                heading: heading,
                content:content
              })
              .then(function (response) {
                console.log(response.data);
                if(response.data == true){
                    //window.location = BaseUrl+"/mywebsites";
                    swal("Success", "Details Updated and saved", "success");
                }else{
                    swal("Error", "Invalid Credentials!", "error");
                }
              }.bind(this))
              .catch(function (error) {
                console.log(error);
              });
            }).catch((error) => {
              //handle error
              swal("Error", "Invalid Credentials!", "error");
            });

    }


    add_about2(image, heading, content){
        let data = new FormData();
        data.append('file', image, image.fileName);
        axios.post('/auth/upload', data, {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
          })
            .then((response) => {
              //handle success
              axios.post('/auth/add_about2', {
                heading: heading,
                content:content
              })
              .then(function (response) {
                console.log(response.data);
                if(response.data == true){
                    //window.location = BaseUrl+"/mywebsites";
                    swal("Success", "Details Updated and saved", "success");
                }else{
                    swal("Error", "Invalid Credentials!", "error");
                }
              }.bind(this))
              .catch(function (error) {
                console.log(error);
              });
            }).catch((error) => {
              //handle error
              swal("Error", "Invalid Credentials!", "error");
            });

    }

    add_services(icon, heading, content){
        console.log(heading);
        axios.post('/auth/add_service', {
            icon: icon,
            heading: heading,
            content:content
          })
          .then(function (response) {
            console.log(response.data);
            if(response.data == true){
                //window.location = BaseUrl+"/mywebsites";
                swal("Success", "Details Updated and saved", "success");
            }else{
                swal("Error", "Invalid Credentials!", "error");
            }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
    }

    add_portfolio(image, heading, content){

        let data = new FormData();
        data.append('file', image, image.fileName);
        axios.post('/auth/upload', data, {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
          })
            .then((response) => {
              //handle success
              axios.post('/auth/add_portfolio', {
                heading: heading,
                content:content
              })
              .then(function (response) {
                console.log(response.data);
                if(response.data == true){
                    //window.location = BaseUrl+"/mywebsites";
                    swal("Success", "Details Updated and saved", "success");
                }else{
                    swal("Error", "Invalid Credentials!", "error");
                }
              }.bind(this))
              .catch(function (error) {
                console.log(error);
              });
            }).catch((error) => {
              //handle error
              swal("Error", "Invalid Credentials!", "error");
            });

    
    }



};

var Homepage = createReactClass({

render:function(){

    return(
      <div>
       <Header/>
      <Login loginRequest={this.loginRequest}/>
          </div>
    );
    
},
loginRequest: function(email,password){
    axios.post('/auth/login', {
        username: email,
        password: password
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data == true){
            //window.location = BaseUrl+"/mywebsites";
            this.props.history.push('/mywebsites');
        }else{
            swal("Error", "Invalid Credentials!", "error");
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
}

});

ReactDom.render(<App />, document.getElementById('todo-wrapper'));