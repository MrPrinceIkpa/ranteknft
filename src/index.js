import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Components/Navigation/Navigation'
import Heroimage from './Components/Heroimage/Heroimage';

const App = function() {
  useEffect(() => {
    var h1 = document.querySelector(".heading");
    var h2 = document.querySelector(".heading2");
    
    setTimeout(function() {
      h1.classList.add("hposition2")
    }, 500)
    setTimeout(function() {
      h2.classList.add("hposition2")
    }, 350)
  })
  return(
    <>
      <Navigation />
        <div id="HeroCon">
          <div id="Hero">
            <div className="herotext">
              <div id="herotextCore">
                <h1 className='heading'>Lorem ipsum dolor sit amet</h1>
                <h2 className='heading2'>
                  Integer nunc neque, suscipit in dictum quis, tristique ut purus. Donec auctor augue id finibus
                </h2>
                <button id="cto">MINT</button>
              </div>
            </div>
            <Heroimage />
          </div>
        </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);