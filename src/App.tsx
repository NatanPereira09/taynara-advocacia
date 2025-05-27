import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/taynara-advocacia/" element={<Home />} />
          <Route path="/obrigada" element={<ThankYou />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;