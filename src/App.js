import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="appSideBar">
      <SideBar></SideBar>
      </div>
      <div className="appContent">
      <Task></Task>
      </div>
    </div>
  );
}

export default App;
