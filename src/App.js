import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';

function App() {
  const [state, setState] = useState(false);
  const toggle = ()=>{
    setState(!state);
  }
 
  return (
    <div className="App">
        <div className='container'>
          <div className={'toggle--button ' + (state ? 'toggle--close':'')}>
            <button onClick={toggle} className='but'>click</button>
          
         
          </div>
        </div>
    
    </div>
  );
}

export default App;
