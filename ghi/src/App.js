import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
