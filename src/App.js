/*eslint-disable*/
import list from './Data.jsx';
import './App.css';
import {NavBar, Alarm,Card} from './Compo.jsx';
import React from 'react';
import { Row, NavDropdown } from 'react-bootstrap';



function App() {
    
  return (
    <div className="App">
      <div className='back'>
      <NavBar/>
      <Alarm/>
      <NavDropdown.Toggle title="Order Menu"/>
      <NavDropdown.Item >
      {list.map((it) =>{<Card sub={it}/>})}
      </NavDropdown.Item>
      </div>
      </div>
  );
}

export default App;



