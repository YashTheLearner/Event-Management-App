// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Sidebar from "./Components/SideBar.jsx";
import { Signup } from './Components/Signup';
import Profile from './Components/Profile';
import MyEvents from './Components/MyEvents.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/sidebar" element={ <Sidebar/> } />
      <Route path="/profile" element={<Profile />} />
      <Route path='/myevents' element={<MyEvents />} />
    </Routes>
  );
}

export default App;
