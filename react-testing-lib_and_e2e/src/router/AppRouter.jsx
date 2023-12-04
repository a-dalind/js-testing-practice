import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "pages/main/MainPage";
import AboutPage from "pages/about/AboutPage";
import UsersPage from "pages/users/UsersPage";
import UserDetailsPage from "pages/user-details/UserDetailsPage";
import ErrorPage from "pages/error/ErrorPage";
import E2eExamplePage from "pages/e2e-example/E2eExamplePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/e2e-example" element={<E2eExamplePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/users" element={<UsersPage/>} />
            <Route path="/users/:id" element={<UserDetailsPage/>} />
            <Route path="/*" element={<ErrorPage/>} />
        </Routes>
    );
};

export default AppRouter;
