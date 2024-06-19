// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    {/* <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link> */}
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
