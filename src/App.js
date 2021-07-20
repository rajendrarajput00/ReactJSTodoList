import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Task from './components/Task';
import Hoc from './components/Hoc/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
            {/*<Route path='/student-managment' component={Task}></Route> */}
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
