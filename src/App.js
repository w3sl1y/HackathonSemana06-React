import React from 'react';
import './assets/css/App.css';
import irelia from './assets/img/irelia.gif';

function App() {
  return (
    <div className="container">
      <div class="left">
        
        <div class="youbase">
          <p>YouBase</p>
        </div>

        <div class="connect">
          <h1>Connect to people,<br/> not platforms.</h1>
          <p>Person-mediate health data exchange is the<br/>future of Health IT and precision medicine<br/>Youbase was built to take us there.</p>
          <br/><br/>
          <p> Sign up for out beta list to learn more.</p>
        </div>

        <div class="email">
          <div>
          <input placeholder="Enter your email..."></input>
          </div>
          <div>
          <button>GET STARTED</button>
          </div>
          </div>
      </div>
      
      <div class="center">
        <button>▶</button>
      </div>

      <div class="right">
        <div class="header">
            <b><p><a class="header" href="www.#">SOLUTION</a></p></b>
            <b><p><a class="header" href="www.#">PARTNERS</a></p></b>
            <b><p><a class="header" href="www.#">PATIENT</a></p></b>
            <b><p><a class="header" href="www.#">ABOUT</a></p></b>
            <b><p><a class="header" href="www.#">CONTACT</a></p></b>
        </div>
        <div class="vid">
          <img src={irelia} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;