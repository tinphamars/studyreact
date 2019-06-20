import React from 'react'

import Home from "./pages/HomePage/Home";
import Notfound from './pages/404Page/Notfound';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const Web = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <Notfound />
    }
];

export default Web;