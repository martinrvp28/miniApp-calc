import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Options from './components/Options/Options';
import PercentCalc from './components/PercentCalc/PercentCalc';

function App() {
  return (
    <div className="App">

      <PercentCalc/>

    </div>
  );
}

export default App;
