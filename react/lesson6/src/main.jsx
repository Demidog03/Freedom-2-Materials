import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ShopPage from './components/shop/ShopPage';
import LoginPage from './components/login/LoginPage'
import ShopItemPage from './components/shop/ShopItemPage';
import AuthContextComponent from './components/contexts/AuthContext'
import AuthGuard from './components/guards/AuthGuard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />, // redirect - перенаправление
  },
  {
    path: "/login",
    element: <LoginPage />

  },
  {
    path: "/shop",
    element:
      <AuthGuard>
        <ShopPage />
      </AuthGuard>
    ,
  },
  {
    path: '/shop/:id',
    element:
      <AuthGuard>
        <ShopItemPage />
      </AuthGuard>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextComponent>
    <RouterProvider router={router} />
  </AuthContextComponent>
)
