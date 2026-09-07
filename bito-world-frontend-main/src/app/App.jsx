/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../components/layout/Header';
import AppRoutes from './router/AppRoutes';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <AppRoutes />
    <Toaster position="bottom-center" reverseOrder={false} />
  </BrowserRouter>
);

export default App;
