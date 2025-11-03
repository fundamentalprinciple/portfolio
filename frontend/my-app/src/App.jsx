import { useState } from 'react';

import './outputCSS/App.css';
import Layout from './componentsJS/Layout'


import { Routes, Route } from 'react-router-dom';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    )
}

export default App
