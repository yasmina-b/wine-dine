import React from 'react';
import HomePage from './pages/homepage/HomePage';
import LogInPage from './pages/loginpage/LogInPage';
import RegisterPage from './pages/registerpage/RegisterPage';

import { 
    BrowserRouter, 
    Route,
    Switch
}from "react-router-dom";


function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LogInPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        
        </BrowserRouter>
    )
};

export default Routes