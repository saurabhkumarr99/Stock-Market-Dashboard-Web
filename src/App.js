import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './allComponents/AuthContext';
import Header from './allComponents/Header';
import Home from './allComponents/Home';
import Login from './allComponents/Login';
import ContactUs from './allComponents/ContactUs';
import AboutUs from './allComponents/AboutUs';
import Register from './allComponents/Register';
import MarketPulse from './allComponents/MarketPulse';
import RealTimeStockData from './allComponents/RealTimeStockData';
import MyDashboard from './allComponents/MyDashboard'
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/marketPulse" element={<MarketPulse />} />
          <Route path="/realtime" element={<RealTimeStockData />} />
          <Route path="/dashboard" element={<MyDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

