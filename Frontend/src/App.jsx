// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import { Signup } from './Components/Signup';
import Profile from './Components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
