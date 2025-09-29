import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './src/components/Navigation';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { BonusesPage } from './pages/BonusesPage';
import { RulesPage } from './pages/RulesPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-teal-900 to-cyan-900 text-white overflow-x-hidden">
        <Navigation />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/bonuses" element={<BonusesPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="bg-slate-900/80 border-t border-cyan-400/20 py-8 sm:py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-cyan-300 mb-4">© 2025 Sirens Fortune. All treasures reserved.</p>
            <p className="text-teal-400 text-sm">
              Play responsibly. Must be 18+ to participate.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
