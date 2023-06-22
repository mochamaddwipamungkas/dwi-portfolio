import React from 'react';
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Components from './components/components';
import DetailProject from './components/detailproject';



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/dwi-portfolio" element={<Components />} />
        <Route path="/detailproject" element={<DetailProject />} />
      </Routes>
    </HashRouter>

  )
}
export default App;
