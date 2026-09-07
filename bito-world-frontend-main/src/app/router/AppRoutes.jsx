/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { events } from '../../data/events';
import Home from '../../pages/home/Home';
import Membership from '../../pages/membership/Membership';
import MembershipPlans from '../../pages/membership/MembershipPlans';
import NotFound from '../../pages/not-found/NotFound';
import BitoPage from '../../pages/bito/BitoPage';
import BitoAdvisors from '../../pages/bito/BitoAdvisors';
import BIA from '../../pages/bia/BIA';
import About from '../../pages/about/About';
import Events from '../../Pages/Events/Events';
import EventDetails from '../../Pages/Events/EventDetails';
import OurWork from '../../pages/our-work/OurWork';
import ContactUs from '../../pages/contact/ContactUs';
import Appointment from '../../pages/appointment/Appointment';
import AdminLogin from '../../pages/admin/AdminLogin';
import AdminDashboard from '../../pages/admin/AdminDashboard';
import AdminCMS from '../../pages/admin/AdminCMS';
import ThankYou from '../../Components/modals/ThankYou';
import Landing from '../../components/landing/Landing';
import Footer from '../../components/layout/Footer';
import BIAFooter from '../../components/layout/BIAFooter';
import AboutFooter from '../../components/layout/AboutFooter';
import ProtectedRoute from './ProtectedRoute';
import Trade from '../../pages/trade/TradePage';
import ProductDetail from '../../pages/trade/ProductDetail';

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join-now" element={<Landing />} />
       <Route path="/Tradepage" element={<Trade />} />
       <Route path="/trade/product/:id" element={<ProductDetail />} />
      <Route path="/bia" element={<BIA />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/bito" element={<BitoPage />} />
      <Route path="/membership-plans" element={<MembershipPlans />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/bito-advisors" element={<BitoAdvisors />} />
      <Route path="/appointment" element={<Appointment />} />
      {/* Admin routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin-cms" element={<ProtectedRoute><AdminCMS /></ProtectedRoute>} />
      {/* Dynamic events page */}
      <Route path="/events" element={<Events events={events} />} />
      <Route path="/events/:slug" element={<EventDetails events={events} />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
    </Routes>

    <Routes>
      <Route path="/bia" element={<BIAFooter />} />
      <Route path="/about" element={<AboutFooter />} />
      <Route path="*" element={<Footer />} />
    </Routes>
  </>
);

export default AppRoutes;
