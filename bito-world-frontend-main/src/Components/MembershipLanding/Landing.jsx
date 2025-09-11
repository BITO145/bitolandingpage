import React from "react";
import Page from "./components/Page";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import AppStatistics from "./components/AppStatistics";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhoWeAreSection from "./components/WhoWeAreSection";
import { ChaptersCarousel } from "./components/ChaptersCarousel";

// Remove all context, modal, and dynamic dependencies

const redirectToMain = (e) => {
  e.preventDefault();
  window.location.href = "https://www.bitoindustriesassociation.com";
};

// Patch navigation and any links in subcomponents to redirect to main site

const Landing = () => {
  return (
    <Page>
      {/* Header and Navigation with patched links */}
      <Header>
        <Navigation onNavLinkClick={redirectToMain} />
        <Hero onActionClick={redirectToMain} />
      </Header>

      <Main>
        <Dashboard />
        <WhoWeAreSection />
        <Features />
        <AppStatistics />
        <ChaptersCarousel />
        <Testimonials />
        <CTA onActionClick={redirectToMain} />
      </Main>

      <Footer onNavLinkClick={redirectToMain} />
    </Page>
  );
};

export default Landing;
