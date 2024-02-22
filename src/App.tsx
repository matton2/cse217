import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Pages} from "./components/Navigation";
import Page from "./components/Page";
import './App.css';

import Home from './routes/Home';
import About from './routes/About';

const App: React.FC = () => {
  return(
    <BrowserRouter>
    <Page>
      <Routes>
        <Route path={Pages.home} element={<Home />}/>
        <Route path={Pages.about} element={<About />}/>

      </Routes>
    </Page>
    </BrowserRouter>
  )
}


export default App;
