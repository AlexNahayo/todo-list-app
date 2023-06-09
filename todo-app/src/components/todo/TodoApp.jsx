import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import withNavigation from './WithNavigation.jsx';
import withParams from "./WithParams.jsx";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";

class TodoApp extends Component {
    render() {
      const LoginComponentWithNavigation = withNavigation(LoginComponent);
      const WelcomComponentWithParms = withParams(WelcomeComponent);
      const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
      const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent)); 

      const HeaderComponentWithNavigation  = withNavigation(HeaderComponent);
        return (
          <div className="TodoApp">
            <Router>
              <HeaderComponentWithNavigation />
                <Routes>
                  <Route path="/"  element={<LoginComponentWithNavigation/>}/>
                  <Route path="/login"  element={<LoginComponentWithNavigation/>}/>
                  <Route path="/welcome/:name"  element={<AuthenticatedRoute><WelcomComponentWithParms/></AuthenticatedRoute>}/>
                  <Route path="/todos/:id"  element={<AuthenticatedRoute><TodoComponentWithParamsAndNavigation/></AuthenticatedRoute>}/>
                  <Route path="/todos"  element={ <AuthenticatedRoute><ListTodosComponentWithNavigation/></AuthenticatedRoute>}/>
                  <Route path="/logout"  element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                  <Route path="*" element={<ErrorComponent/>} />
                </Routes>
              <FooterComponent/>
            </Router>
          </div>  
        )
    }
}


export default TodoApp