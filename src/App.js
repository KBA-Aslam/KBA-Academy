import React from 'react';
import './App.css';
import logo from './images/rsz_logo-t.png'
import Header from './Components/Header/Header';
import Teach from './Components/Teach/Teach';



function App() {
  return (
    <div>
      <div className="App">
      <img src={logo} alt=""/>
      <Header></Header>
      </div>
      <body className="body">
      <Teach></Teach>
      </body>
          <footer className="footer">
                <small>© KBA Group of Company</small> <br/>
                <small>Don't copy please! Result of Very Hardwork.</small>
          </footer>
    </div>
  );
}

export default App;
