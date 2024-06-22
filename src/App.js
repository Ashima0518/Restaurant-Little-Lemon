import React from 'react';
import Nav from './components/Nav';
// import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ReservationsPage from './components/ReservationsPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import LoginPage from './components/LoginPage';
import BookingPage from './components/BookingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-cont">
        <Header />
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
