/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
// Event Thumbnails
import thumbOne from './assets/events/thumbnails/bito-inaugration.webp'
import thumbTwo from './assets/events/thumbnails/bihar-ashmita.jpg'
import thumbThree from './assets/events/thumbnails/gaurav-award.jpg'
import thumbFour from './assets/events/thumbnails/singpore.png'
import thumbFive from './assets/events/thumbnails/uae-event.webp'
// Bito-Innaugration Event Images
import Event1 from './assets/events/bito-innaugration/project-1.webp'
import Event2 from './assets/events/bito-innaugration/project-2.webp'
import Event3 from './assets/events/bito-innaugration/project-3.webp'
// Bihar ashimita Event Images
import Event4 from './assets/events/bihar-ashmita/project-1.jpeg'
import Event5 from './assets/events/bihar-ashmita/project-2.jpeg'
import Event6 from './assets/events/bihar-ashmita/project-3.jpeg'
import Event7 from './assets/events/bihar-ashmita/project-4.jpeg'
import Event8 from './assets/events/bihar-ashmita/project-5.jpeg'
import Event9 from './assets/events/bihar-ashmita/project-6.jpeg'
import Event10 from './assets/events/bihar-ashmita/project-7.jpeg'
import Event11 from './assets/events/bihar-ashmita/project-8.jpeg'
// Bihar gaurav award
import gauravEvent1 from './assets/events/bihar-gaurav-award/project-1.jpeg'
import gauravEvent2 from './assets/events/bihar-gaurav-award/project-2.jpeg'
import gauravEvent3 from './assets/events/bihar-gaurav-award/project-3.jpeg'
import gauravEvent4 from './assets/events/bihar-gaurav-award/project-4.jpeg'
import gauravEvent5 from './assets/events/bihar-gaurav-award/project-5.jpeg'
import gauravEvent6 from './assets/events/bihar-gaurav-award/project-6.jpeg'
import gauravEvent7 from './assets/events/bihar-gaurav-award/project-7.jpeg'
import gauravEvent8 from './assets/events/bihar-gaurav-award/project-8.jpeg'
import gauravEvent9 from './assets/events/bihar-gaurav-award/project-9.jpeg'
import gauravEvent10 from './assets/events/bihar-gaurav-award/project-10.jpeg'
import gauravEvent11 from './assets/events/bihar-gaurav-award/project-11.jpeg'
import gauravEvent12 from './assets/events/bihar-gaurav-award/project-12.jpeg'
import gauravEvent13 from './assets/events/bihar-gaurav-award/project-13.jpeg'
import gauravEvent14 from './assets/events/bihar-gaurav-award/project-14.jpeg'
import gauravEvent15 from './assets/events/bihar-gaurav-award/project-15.jpeg'
import gauravEvent16 from './assets/events/bihar-gaurav-award/project-16.jpeg'
import gauravEvent17 from './assets/events/bihar-gaurav-award/project-17.jpeg'
import gauravEvent18 from './assets/events/bihar-gaurav-award/project-18.jpeg'
import gauravEvent19 from './assets/events/bihar-gaurav-award/project-19.jpeg'
import gauravEvent20 from './assets/events/bihar-gaurav-award/project-20.jpeg'
import gauravEvent21 from './assets/events/bihar-gaurav-award/project-21.jpeg'
// Singapore innaugration
import singaporeEvent1 from './assets/events/singapore-innaugration/project-1.jpeg'
import singaporeEvent2 from './assets/events/singapore-innaugration/project-2.jpeg'
import singaporeEvent3 from './assets/events/singapore-innaugration/project-3.jpeg'
import singaporeEvent4 from './assets/events/singapore-innaugration/project-4.jpeg'
import singaporeEvent5 from './assets/events/singapore-innaugration/project-5.jpeg'
import singaporeEvent6 from './assets/events/singapore-innaugration/project-6.jpeg'
import singaporeEvent7 from './assets/events/singapore-innaugration/project-7.jpeg'
import singaporeEvent8 from './assets/events/singapore-innaugration/project-8.jpeg'
// UAE Event 
import uae1 from './assets/events/UAE-event/1.webp'
import uae2 from './assets/events/UAE-event/2.webp'
import uae3 from './assets/events/UAE-event/3.webp'
import uae4 from './assets/events/UAE-event/4.webp'
import uae5 from './assets/events/UAE-event/5.webp'
import uae6 from './assets/events/UAE-event/6.webp'
import uae7 from './assets/events/UAE-event/7.webp'
import uae8 from './assets/events/UAE-event/8.webp'
import uae9 from './assets/events/UAE-event/9.webp'
import uae10 from './assets/events/UAE-event/10.webp'
import uae11 from './assets/events/UAE-event/11.webp'
import uae12 from './assets/events/UAE-event/12.webp'
import uae13 from './assets/events/UAE-event/13.webp'
import uae14 from './assets/events/UAE-event/14.webp'
import uae15 from './assets/events/UAE-event/15.webp'
import uae16 from './assets/events/UAE-event/16.webp'
import uae17 from './assets/events/UAE-event/17.webp'
import uae18 from './assets/events/UAE-event/18.webp'
import uae19 from './assets/events/UAE-event/19.webp'
import uae20 from './assets/events/UAE-event/20.webp'
import uae21 from './assets/events/UAE-event/21.webp'
import uae22 from './assets/events/UAE-event/22.webp'
import uae23 from './assets/events/UAE-event/23.webp'
import uae24 from './assets/events/UAE-event/24.webp'
import uae25 from './assets/events/UAE-event/25.webp'
import uae26 from './assets/events/UAE-event/26.webp'
import uae27 from './assets/events/UAE-event/27.webp'
import uae28 from './assets/events/UAE-event/28.webp'
import uae29 from './assets/events/UAE-event/29.webp'
import uae30 from './assets/events/UAE-event/30.webp'
import OurWork from './Pages/OurWork'
import BitoAdvisors from './Pages/BitoAdvisors'
import ContactUs from './Pages/ContactUs'


function slugify(text) {
  return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

const App = () => {

  const events = [
    {
      id: 5,
      title: "BITO UAE CHAPTER",
      thumbnail: thumbFive,
      images: [uae22, uae23, uae24, uae25, uae26, uae27, uae28, uae29,uae30, uae1, uae2, uae3, uae4, uae5, uae6, uae7, uae8, uae9, uae10, uae11, uae12, uae13, uae14, uae15, uae16, uae17, uae18, uae19, uae20, uae21, ],
      description: "An exclusive fashion show with top designers.",
    },
    {
      id: 1,
      title: "BITO Inauguration",
      thumbnail: thumbOne,
      images: [Event1, Event2, Event3],
      description: "A grand music concert featuring top artists.",
    },
    {
      id: 2,
      title: "Bihar Ashmita Diwas",
      thumbnail: thumbTwo,
      images: [Event4, Event5, Event6, Event7, Event8, Event9, Event10, Event11],
      description: "An exclusive fashion show with top designers.",
    },
    {
      id: 3,
      title: "Bihar Gaurav Award 2024",
      thumbnail: thumbThree,
      images: [gauravEvent1, gauravEvent2, gauravEvent3, gauravEvent4, gauravEvent5, gauravEvent6, gauravEvent7, gauravEvent8, gauravEvent9, gauravEvent10, gauravEvent11, gauravEvent12, gauravEvent13, gauravEvent14, gauravEvent15, gauravEvent16, gauravEvent17, gauravEvent18, gauravEvent19, gauravEvent20, gauravEvent21],
      description: "An exclusive fashion show with top designers.",
    },
    {
      id: 4,
      title: "BITO Singapore Inauguration",
      thumbnail: thumbFour,
      images: [singaporeEvent1, singaporeEvent2, singaporeEvent3, singaporeEvent4, singaporeEvent5, singaporeEvent6, singaporeEvent7, singaporeEvent8],
      description: "An exclusive fashion show with top designers.",
    },
  ].map(event => ({ ...event, slug: slugify(event.title) }));

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bia" element={<BIA />} />
          <Route path="/membership" exact element={<Membership />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/bito" element={<BitoPage />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork/>}/>
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/bito-advisors' element={<BitoAdvisors/>}/>
          {/* Dynamic events page */}
          <Route path='/events' element={<Events events={events} />} />
          <Route path='/events/:slug' element={<EventDetails events={events} />} />
          <Route component={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>

        <Routes>
          <Route path="/bia" element={<BIAFooter />} />
          <Route path="/about" element={<AboutFooter />} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App