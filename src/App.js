import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Medicines from './pages/medicines';
import Cart from './pages/cart';
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        
        <Route path='/login' element={<Login/>} />
        <Route exact path='/home'  element={<Home />} />
        <Route path='/medicines' element={<Medicines/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </Router>
);
}
  
export default App;