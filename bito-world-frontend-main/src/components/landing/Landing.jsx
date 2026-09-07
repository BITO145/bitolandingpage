import React from "react";
import Page from "./components/Page.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AppStatistics from "./components/AppStatistics.jsx";
import Features from "./components/Features.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import WhoWeAreSection from "./components/WhoWeAreSection.jsx";
import { ChaptersCarousel } from "./components/ChaptersCarousel.jsx";

// Remove all context, modal, and dynamic dependencies

const redirectToMain = (e) => {
  e.preventDefault();
  window.location.href = "https://www.bitoindustriesassociation.com";
};

// Patch navigation and any links in subcomponents to redirect to main site

const Landing = () => {
  return (
    <Page>
      {/* Full-width banner — the global site navbar overlaps it, like every other page */}
      <Hero />

      <Main>
        <Dashboard />
        <WhoWeAreSection />
        <Features />
        <AppStatistics />
        <ChaptersCarousel />
        <Testimonials />
        <CTA onActionClick={redirectToMain} />
      </Main>
    </Page>
  );
};

export default Landing;
