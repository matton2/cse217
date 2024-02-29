import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Pages} from "./components/Navigation";
import Page from "./components/Page";
import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import UserPage from './routes/User'
import { UserProvider } from './context/UserContext';
import { DataProvider } from './context/DataContext';
import GetPeople from './routes/GetPeople';

const App: React.FC = () => {
  return(
    <UserProvider>
      <DataProvider>
    <BrowserRouter>
    <Page>
      <Routes>
        <Route path={Pages.home} element={<Home />}/>
        <Route path={Pages.getDataPage} element={<GetPeople/>}/>
        <Route path={Pages.userPage} element={<UserPage />}/>
        <Route path={Pages.about} element={<About />}/>

      </Routes>
    </Page>
    </BrowserRouter>
    </DataProvider>
    </UserProvider>
  )
}


export default App;
