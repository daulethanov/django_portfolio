import React from "react";
import Header from "./components /heaeder /Header";
import Footer from "./components /footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './style/main.css'
import Register from "./pages/auhentication/Register";
import Login from "./pages/auhentication/Login";
import Home from "./pages/Home";
import {StateProvider} from "./context";
import {AuthProvider} from "./state";
import Profile from "./pages/profile /Profile";

const App = () => {
    return (
        <div className='App'>
                <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/signup' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </Router>
                </AuthProvider>
            {/*<Footer/>*/}
        </div>
    )
}

export default App;
