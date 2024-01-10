import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import CategoryPage from './CategorySearch.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/category' element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
