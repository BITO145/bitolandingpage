/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Membership from './Pages/Membership'
import ThankYou from './Components/modals/ThankYou'
import NotFound from './Pages/NotFound'
import BitoPage from './Pages/BitoPage'
import MembershipPlans from './Pages/MembershipPlans'
import BIA from './Pages/BIA'
import BIAFooter from './Components/BIAFooter'
import About from './Pages/About'
import AboutFooter from './Components/AboutFooter'
import Events from './Pages/Events/Events'
import EventDetails from './Pages/Events/EventDetails'
import OurWork from './Pages/OurWork'
import BitoAdvisors from './Pages/BitoAdvisors'
import ContactUs from './Pages/ContactUs'
import Appointment from './Pages/Appointment'
import AdminLogin from './Pages/AdminLogin'
import AdminDashboard from './Pages/AdminDashboard'
import AdminCMS from './Pages/AdminCMS'
import Landing from './Components/MembershipLanding/Landing'
import { Toaster } from 'react-hot-toast'

// ❌ ERROR: Wrong function name, should be "slugify"
// This will break the home page rendering because `slugify` is used later.
function slugText(text) {
  return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

const RequireAdminAuth = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin-login" />;
};

const App = () => {
  const events = [
    {
      id: 6,
      title: "Bihar Asmita Diwas 2025",
      thumbnail: "test.png", // keeping short for demo
      images: [],
      description: "Celebrating Bihar's pride and heritage in 2025.",
    },
  ].map(event => ({ ...event, slug: slugify(event.title) })); 
  // ❌ ERROR: ReferenceError because "slugify" is not defined (we named it slugText above).
  // ✅ FIX: Rename function "slugText" back to "slugify" or change usage here to "slugText(event.title)".

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* This will fail due to slugify error above */}
          <Route path='/join-now' element={<Landing />} />
          <Route path="/bia" element={<BIA />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/bito" element={<BitoPage />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork/>}/>
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/bito-advisors' element={<BitoAdvisors/>}/>
          <Route path='/appointment' element={<Appointment />} />
          {/* Admin routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<RequireAdminAuth><AdminDashboard /></RequireAdminAuth>} />
          <Route path="/admin-cms" element={<RequireAdminAuth><AdminCMS /></RequireAdminAuth>} />
          {/* Dynamic events page */}
          <Route path='/events' element={<Events events={events} />} />
          <Route path='/events/:slug' element={<EventDetails events={events} />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>

        <Routes>
          <Route path="/bia" element={<BIAFooter />} />
          <Route path="/about" element={<AboutFooter />} />
          <Route path="*" element={<Footer />} />
        </Routes>
        <Toaster position='bottom-center' reverseOrder={false} />
      </BrowserRouter>
    </>
  );
}

export default App
