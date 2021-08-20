import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Task from './components/Task';
import Hoc from './components/Hoc/index'
import UseReducers from './components/UseReducers/index'
import Context from './components/useContext/index'
import OwnHooks from './components/OwnHooks/index'
import UseRefs from './components/UseRef/index'
import Calculator from './components/Calculator/index'
import Weather from './components/Weather/index'
import ClassLifeCycle from './components/ClassLifeCycle/index'
import LazyLoading from './components/LazyLoading/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="appSideBar">
          <SideBar></SideBar>
        </div>
        <div className="appContent">
          <Switch>
            <Route path='/' exact component={Task}></Route>
            <Route path='/hoc' exact component={Hoc}></Route>
            <Route path='/context' exact component={Context}></Route>
            <Route path='/uesReducer' exact component={UseReducers}></Route>
            <Route path='/uesRef' exact component={UseRefs}></Route>
            <Route path='/ownHook' exact component={OwnHooks}></Route>
            <Route path='/calculator' exact component={Calculator}></Route>
            <Route path='/weather' exact component={Weather}></Route>
            <Route path='/class-life-cycle' exact component={ClassLifeCycle}></Route>
            <Route path='/lazy-loading' exact component={LazyLoading}></Route>
            
            {/*<Route path='/student-managment' component={Task}></Route> */}
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
