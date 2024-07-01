import React from 'react';
import { CartProvider } from 'react-use-cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Main from 'pages/Main/Main';
import No from 'pages/No/No';




export const App = () => {
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
