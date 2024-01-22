import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import MexicanPage from './CategorySearches/mexicanSearch.js';
import BarPage from './CategorySearches/barSearch.js';
import ChinesePage from './CategorySearches/chineseSearch.js';
import GreekPage from './CategorySearches/greekSearch.js';
import ItalianPage from './CategorySearches/italianSearch.js';
import JapanesePage from './CategorySearches/japaneseSearch.js';
import MediterrianPage from './CategorySearches/mediterrianSearch.js';
import ThaiPage from './CategorySearches/thaiSearch.js';
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
