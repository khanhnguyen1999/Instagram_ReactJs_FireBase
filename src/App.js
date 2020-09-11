import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import {Model} from './components/Model'
import {Context} from './Global'
import {Stories} from './components/Storii'
import {Create} from "./components/Create";
import {Posts} from "./components/Posts";
import {SideBar} from "./components/SideBar";

function App() {
  return (
      <Context>
        <Navbar/>
          <div className="container">
            <Stories/>
            <Create />
            <Posts/>
            <SideBar/>
          </div>
        <Model/>
      </Context>
  );
}

export default App;
