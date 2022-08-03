import React from 'react';
import SearchPage from '../searchPage';
import CardPage from '../cardPage';
import { Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route  path = '/' element={<SearchPage/>}/>
      <Route  path = '/card' element={<CardPage/>}/>
    </Routes>
  );
}

export default App;
