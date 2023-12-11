import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignupForm from './SignupForm.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
