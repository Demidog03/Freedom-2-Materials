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
import { Toaster } from 'react-hot-toast';
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'

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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </Provider>
)
