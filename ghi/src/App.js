import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import MexicanPage from './CategorSearches/mexicanSearch.js';
import BarPage from './CategorSearches/barSearch.js';
import ChinesePage from './CategorSearches/chineseSearch.js';
import GreekPage from './CategorSearches/greekSearch.js';
import ItalianPage from './CategorSearches/italianSearch.js';
import JapanesePage from './CategorSearches/japaneseSearch.js';
import MediterrianPage from './CategorSearches/mediterrianSearch.js';
import ThaiPage from './CategorSearches/thaiSearch.js';
import HomePage from './home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/NomNom' element={<HomePage />} />
          <Route path='/category/mexican' element={<MexicanPage />} />
          <Route path='/category/bar' element={<BarPage />} />
          <Route path='/category/chinese' element={<ChinesePage />} />
          <Route path='/category/greek' element={<GreekPage />} />
          <Route path='/category/italian' element={<ItalianPage />} />
          <Route path='/category/japanese' element={<JapanesePage />} />
          <Route path='/category/mediterrian' element={<MediterrianPage />} />
          <Route path='/category/thai' element={<ThaiPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
