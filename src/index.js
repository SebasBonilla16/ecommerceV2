import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import About from './page/About';
import Contact from './page/Contact';
import Login from './page/Login';
import Newproducts from './page/NewProducts';
import Signup from './page/SignUp';
import { store } from './redux/index';
import { Provider } from "react-redux";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      {/* <Route path='/Shop' element={<Shop/>}/> */}
      <Route path='/Shop/:filterby' element={<Shop/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/NewProducts' element={<Newproducts/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
