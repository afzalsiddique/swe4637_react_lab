import logo from './logo.svg';
import './App.css';
import TimerList from './TimerList';
// import { TimerContext } from './Context/TimerContext';
import {createContext, useState} from 'react';

export const TimerContext = createContext({})
function App() {
  const [timerContext, setTimerContext] = useState([])
  return (
    <div className="App">
      <TimerContext.Provider value = {{timerContext, setTimerContext}}>
      <TimerList />
      </TimerContext.Provider>
    </div>
  );
}

export default App;
