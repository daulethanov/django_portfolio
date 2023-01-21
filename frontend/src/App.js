import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import ResetPassword from "./containers/ResetPassword";
import Activate from "./containers/Activate";

import Layout from "./hocs/Layout";

import {Provider} from "react-redux";
import store from "./store";


const App = () => (
    <BrowserRouter>
    <Provider store={store}>
        <Layout>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/reset_password' element={<ResetPassword />} />
                <Route path='/password/rest/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
                <Route path='/activate/:uid/:token' element={<Activate />} />
            </Routes>
        </Layout>
    </Provider>
    </BrowserRouter>
)
export default App;
