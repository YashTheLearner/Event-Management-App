// App.jsx
import React, { useState } from 'react';
import { Navbar } from './Components/Navbar.jsx';
import OutletWrapper from "./Components/OutletWrapper"; // Import the new wrapper component
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
    <Navbar/>
    <OutletWrapper isActive={isActive} /> {/* Use the wrapper component */}
    </>
  );
}

export default App;
