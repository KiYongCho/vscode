import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './Header';
import ListProduct from './ListProduct';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <ListProduct />
        <Footer />
    </BrowserRouter>
);