import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import {Model} from './components/Model'
import {Context} from './Global'
import {Stories} from './components/Storii'

function App() {
  return (
      <Context>
        <Navbar/>
          <div className="container">
            <Stories/>
          </div>
        <Model/>
      </Context>
  );
}

export default App;
