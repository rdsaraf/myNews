import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  const changeMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
    mode === 'light' ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white';
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} changeMode={changeMode} />
        <LoadingBar
          height={3}
          shadow='true'
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" mode={mode} pages={8} country='in' category='general' /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" mode={mode} pages={8} country='in' category='business' /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" mode={mode} pages={8} country='in' category='entertainment' /></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general" mode={mode} pages={8} country='in' category='general' /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" mode={mode} pages={8} country='in' category='health' /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" mode={mode} pages={8} country='in' category='science' /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" mode={mode} pages={8} country='in' category='sports' /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" mode={mode} pages={8} country='in' category='technology' /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
