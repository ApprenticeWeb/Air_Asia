import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Path from './infrastructure/utils';
import './index.css';
import WelcomePage from './components/pages/WelcomePage/index';
import MainPage from './components/pages/MainPage/index';
import Layout from './components/Layout/index';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={Path.Start} element={<WelcomePage />} />
            <Route element={<Layout />}>
                <Route path={Path.Main} element={<MainPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,

);
