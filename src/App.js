import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Components from './components/components';
import DetailProject from './components/detailproject';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/detailproject" element={<DetailProject />} />
      </Routes>
    </BrowserRouter>



  )
}
export default App;
