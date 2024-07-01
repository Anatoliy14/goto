import React, { useEffect } from 'react';
import { CartProvider } from 'react-use-cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Main from 'pages/Main/Main';
import No from 'pages/No/No';




export const App = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      console.log(`App${key}: ${value}`);
    });
  }, []);
  return (
    <CartProvider>
      <Routes>
        <Route path="/crafters" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="no" element={<No />} />
        </Route>
        <Route path="*" element={<Navigate to="/crafters" replace />} />
      </Routes>
    </CartProvider>
  );
};
